import React from "react";
import Header from "../background.jpg";
import author from "../images/TDTC.jpg";
import author1 from "../images/8.jpg";
import author2 from "../images/21.jpg";
import author3 from "../images/28.jpg";
import Movieheading from "./Movieheading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faMobile,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
    <div className="head-text">
      <div
        style={{
          backgroundImage: `url(${Header})`,
          backgroundSize: "cover",
          height: "70vh",
          color: "#f5f5f5",
        }}
      ></div>
      <div class="text-on-image">
        <h1> TITO LLC</h1>
      </div>
    </div>
    <div className="services" id="services">
      <div className="py-5 mx-3">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="box1">
              <h1 className="services-heading">Our Focus</h1>
              <p className="mt-3 ">
                Here are the services that i can offer you, my skills and
                experiences.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="Icon" icon={faTruck} />
              </div>
              <h3>Payment & Delivery</h3>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="box2">
              <div className="circle">
              {/* <FontAwesomeIcon icon="fa-solid fa-user-headset" /> */}
                <FontAwesomeIcon className="Icon" icon={faHeadset} />
              </div>
              <h3>All Time Consultation</h3>
            </div>
          </div>
        </div>
        {/* - */}
        <div className="row ">
          <div className="col-md-4 col-sm-12 ms-auto">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="Icon" icon={faMobile} />
              </div>
              <h3>Available Offline</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5 bg-dark about" id="about">
      <Movieheading heading="BEST SELLING"/>
      <div className="row">
        <div className="col-lg-3 col-xm-12 photo-wrap mb-5">
          <div>
            <div>
              <img className="profile-img" src={author} alt="author..." />
              <h6 className="text">CHICKEN FEED MIXER AND MILL MACHINE</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xm-12 photo-wrap mb-5">
          <div>
            <div>
              <img className="profile-img" src={author1} alt="author..." />
              <h6 className="text">PULVERIZER MACHINE</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xm-12 photo-wrap mb-5">
          <div>
            <div>
              <img className="profile-img" src={author2} alt="author..." />
              <h6 className="text">PEANUT BUTTER MAKING  MACHINE</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xm-12 photo-wrap mb-5">
          <div>
            <div>
              <img className="profile-img" src={author3} alt="author..." />
              <h6 className="text">CONCRETE BLOCK MAKING MACHINE</h6>
            </div>
          </div>
        </div>
      </div>
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
          <p className="paragraph">(+255) 022 260 7524 <br/> Mon - Sun, 24hrs</p>
        </div>
        <div className="col-lg-4 col-xm-12 about-text mt-5">
          <h3 className="about-heading">EMAIL</h3>
          <p className="paragraph">
          info@titollc.com
          </p>
        </div>
      </div>
      <h5>Visit us in our socials</h5>
    </div>
    </>
  );
}

export default Home;
