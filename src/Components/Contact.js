import React from "react";
import Header from "../images/contact.jpg";
import Map from "./Map";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const location = {
  address: "TDTC",
  lat: -6.784332243727264,
  lng: 39.20627969446912,
};

function Contact() {
  // sending email here

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
    emailjs
      .sendForm(
        "service_vzo9vab",
        "template_e7j7frl",
        form.current,
        "qKDi3bw3jvJiEgp8J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <div className="head-text">
        <div
          style={{
            backgroundImage: `url(${Header})`,
            backgroundSize: "cover",
            height: "60vh",
            color: "#f5f5f5",
          }}
        ></div>
        <div className="text-on-image">
          <h1 style={{ textAlign: "center" }}> HAVE QUESTIONS?</h1>
          <p style={{ textAlign: "center" }}>Reach Out to Us</p>
        </div>
      </div>
      <div className="py-5 contacts bg-dark" id="contacts">
        <div className="text-center mb-5">
          <h1>Contact Me</h1>
          <p>
            Please fill out the form and describe your project needs and i will
            contact you as soon as possible
          </p>
          {/* <span className="success-message">{successMessage}</span> */}
        </div>
        <div className="container">

        <form ref={form} onSubmit={sendEmail}>
          <div class="form-floating mb-3 g-5">
            {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
       <input type="email" name="from_name" />
        <label>Message</label>
       <textarea name="message" />
      <input type="submit" value="Send" />
       </form> */}
           
          
            <div className="row mx-5">
              <div className="col-lg-6 col-xm-12">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="email"
                  // label="email"
                  name="from_name"
                  className="form-control"
                  placeholder="Email"
                />
                {/* <input
                  type="text"
                  // label="phone"
                  className="form-control"
                  placeholder="Phone number"
                /> */}
                <input
                  type="file"
                  // label="phone"
                  name = "my_file"
                  className="form-control"
                  // placeholder="Phone number"
                />
              </div>
              <div className="col-lg-6 col-xs-12">
                <textarea
                  type="text"
                  // label="description"
                  name="message"
                  className="form-control"
                  placeholder="Write your short Message"
                ></textarea>
                <button className="btn-main-offer contact-btn" type="submit">
                  Contact Me
                </button>
              </div>
            </div>
            
          </div>
          </form>


        </div>
      </div>
      <Map location={location} zoomLevel={18} />
    </div>
  );
}

export default Contact;

// import { useRef } from "react";
// import emailjs from '@emailjs/browser'
// // import env from 'dotenv';

// // env.config();
// const Contact = () => {

//   const form = useRef()

//   const sendEmail = (e) => {
//     e.preventDefault()

//     // emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
//     emailjs.sendForm('service_w30hx1p', 'template_k5ucupm', form.current, 'w7knmIn3jLI7G1MdK')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });

//   }

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );

// }

// export default Contact
