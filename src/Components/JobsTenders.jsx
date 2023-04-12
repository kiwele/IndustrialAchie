import React from "react";
import Header from "../images/background.jpg";
import author4 from "../images/application.jpg";
import Movieheading from "./Movieheading";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function JobsTenders() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
    emailjs
      .sendForm(
        "service_vzo9vab",
        "template_11mr5oq",
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
        <div className="texts">
          <h1> Jobs and Tenders</h1>
          <img src={author4} alt="author..." />
        </div>
      </div>
      <div className="py-5 bg-dark about" id="about">
        <Movieheading heading="AREA(s) OF SPECIALIZATION IN JOBS AND TENDERS APPLICATION AT TDTC" />
        <div className="row">
          <div className="col-lg-3 col-xm-12"></div>
          <div className="col-lg-5 col-xm-12">
            <ul>
              <li>Industrial Engineer</li>
              <li>Mechanical Engineer</li>
              <li>Chemical and Process Engineer</li>
              <li>Textile Engineer</li>
              <li>Metallurgy Engineer</li>
              <li>Technicians (welding, grinding, metal forming)</li>
              <li>Accountant</li>
              <li>IT specialists</li>
              <li>Electrical Engineer</li>
              <li>Actuarial</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 contacts bg-dark" id="contacts">
        <div className="text-center mb-5">
          <h1>FILL THE FORM BELOW FOR APPLICATION</h1>
          <p>
            Please fill out the form and describe your professional skills and i will
            contact you as soon as possible
          </p>
          {/* <span className="success-message">{successMessage}</span> */}
        </div>
        {/* <div className="container"> */}

        <form ref={form} onSubmit={sendEmail}>
        <div class="form-floating mb-3 g-5">
            <div className="row mx-5">
              <div className="col-lg-6 col-xm-12">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="from_name"
                  // label="email"
                  className="form-control"
                  placeholder="Email"
                />
                <input
                  type="number"
                  name="phone"
                  // label="phone"
                  className="form-control"
                  placeholder="Phone number"
                />
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
                  name="message"
                  // label="description"
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


        {/* </div> */}
      </div>



      <div className="py-5 services" id="about">
        <div className="row">
          <div className="col-lg-4 col-xm-12 about-text mt-5">
            <h3 className="about-heading">ADDRESS</h3>
            <p className="paragraph">
              P.O. BOX 35091,
              <br /> Dar es Salaam,
              <br /> Tanzania.
            </p>
          </div>
          <div className="col-lg-4 col-xm-12 about-text mt-5">
            <h3 className="about-heading">PHONE NUMBER</h3>
            <p className="paragraph">
              (+255) 022 260 7524 <br /> Mon - Sun, 24hrs
            </p>
          </div>
          <div className="col-lg-4 col-xm-12 about-text mt-5">
            <h3 className="about-heading">EMAIL</h3>
            <p className="paragraph">info@titollc.com</p>
          </div>
        </div>
        <h5>Visit us in our socials</h5>
      </div>
    </div>
  );
}

export default JobsTenders;
