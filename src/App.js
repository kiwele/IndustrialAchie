import React, {useState, useEffect} from 'react'
import { commerce } from './lib/commerce';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Navigation from './Components/Navigation/Navigation'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import About from './Components/About';
import JobsTenders from './Components/JobsTenders';
import Contact from './Components/Contact';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
   const [order, setOrder] = useState({});
   const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

   const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
     try {
       const incomingOrder = await commerce.checkout.capture(
         checkoutTokenId,
         newOrder
       );

       setOrder(incomingOrder);

       refreshCart();
     } catch (error) {
       setErrorMessage(error.data.error.message);
     }
   };


  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

  console.log(cart);

  return (
    <Router>
      <Navigation totalItems={cart.total_items} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home />
          }
        />
         <Route
          exact
          path="/about"
          element={
            <About />
          }
        />
        <Route
          exact
          path="/shop"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <Checkout cart={cart} 
            order={order}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}/>
          }
        />
        <Route
          exact
          path="/tenders"
          element={
            <JobsTenders />
          }
        />
         <Route
          exact
          path="/contact"
          element={
            <Contact />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
