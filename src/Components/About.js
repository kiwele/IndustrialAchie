import React from "react";
import Header from "../background.jpg";
import author from "../images/Fransisca.jpg";
import author1 from "../images/gerald.jpg";
import author2 from "../images/Archibald.jpg";
import author3 from "../images/suzy.jpg";
import author4 from "../images/Ally.jpg";
import Movieheading from "./Movieheading";

function About() {
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
        <div className="text-image">
          <h1>
            {" "}
            Building a better tomorrow through <br /> advertising & marketing
          </h1>
        </div>
      </div>
      <div className="py-5 bg-dark about" id="about">
        <div className="py-5 mx-3">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="box1">
                <h1 className="services-heading">THIS IS US</h1>
              </div>
            </div>
            {/* - */}
            <div className="col-md-4 col-sm-12">
              <div className="box6">
                <p className="mt-3 ">
                  We are a digital transformation platform company aiming to
                  help individuals and enterprises acquare innovative products
                  and services from Technology Development and Transfer
                  Center (TDTC) through marketing and advertising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <div className="py-5 mx-3">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="box1">
                <h1 className="services-heading">Our Values</h1>
              </div>
            </div>
            {/* - */}
            <div className="col-md-4 col-sm-12">
              <div className="box8">
                <div>
                  <h3>Integrity</h3>
                </div>
                <div className="para">
                  <p>
                    We continue to do the right thing, at any cost for total
                    customer satisfaction
                  </p>
                </div>
              </div>
            </div>
            {/* - */}
            <div className="col-md-4 col-sm-12">
              <div className="box8">
                <div>
                  <h3>Accountability</h3>
                </div>
                <div className="para">
                  <p>We honor and respect responsibility for what we do</p>
                </div>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="row ">
            <div className="col-md-4 col-sm-12 ms-auto">
              <div className="box8">
                <div>
                  <h3>Customer focus</h3>
                </div>
                <div className="para">
                  <p>
                    We put the clients of our business first before anything
                    else
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="box8">
                <div>
                  <h3>Innovation</h3>
                </div>
                <div className="para">
                  <p>
                    We foster creative minds to become giants in this world of
                    autonomous industrial revolution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12"></div>
          <div className="col-md-7 col-sm-12">
            <div
              class="accordion accordion-flush"
              id="accordionFlushExample"
              style={{ background: "#141414" }}
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Our Vision
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <code>
                      “To become the leading company in Tanzania to offer
                      marketing and advertising services for innovative
                      businesses.”
                    </code>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Our Mission
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <code>
                      “To foster efficient and effective marketing and
                      advertising services as a key for improvement of
                      innovative businesses in Tanzania.”
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-dark about" id="about">
        <Movieheading heading="Meet our Directors" />
        <div className="row">
          <div className="col-lg-1 col-xm-12"></div>
          <div className="col-lg-2 col-xm-12 photo-wrap mb-5">
            <div>
              <div>
                <img className="profile-imgg" src={author} alt="author..." />
                <h6 className="text">Fransisca Honory</h6>
                <h6 className="text">Chief Executive Officer</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-xm-12 photo-wrap mb-5">
            <div>
              <div>
                <img className="profile-imgg" src={author1} alt="author..." />
                <h6 className="text"> Gerald Dominic</h6>
                <h6 className="text">Chief Technical Officer</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-xm-12 photo-wrap mb-5">
            <div>
              <div>
                <img className="profile-imgg" src={author2} alt="author..." />
                <h6 className="text">Archibald Mero</h6>
                <h6 className="text">Chief Operating Officer</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-xm-12 photo-wrap mb-5">
            <div>
              <div>
                <img className="profile-imgg" src={author3} alt="author..." />
                <h6 className="text">Suzana Cosmas</h6>
                <h6 className="text">Head of Operations </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-xm-12 photo-wrap mb-5">
            <div>
              <div>
                <img className="profile-imgg" src={author4} alt="author..." />
                <h6 className="text">Ally Abdillah</h6>
                <h6 className="text">Chief Financial Officer</h6>
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

export default About;
