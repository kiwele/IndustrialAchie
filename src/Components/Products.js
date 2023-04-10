import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import "./App.css";

function Products({products, onAddToCart}) {
  return (
    <main style={{ flexGrow: 1, marginTop:90, marginLeft:20, marginRight:20 }}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products