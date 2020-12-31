import React from "react";
import src from "../assets/images/hero-img.png";
import ClientComponents from "../components/ClientComponents";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Better Solutions For Stock Market Screening</h1>
              <h2>
                We are team of talanted peoples with proper dedication to serve
                you the best.
              </h2>
              <div class="d-lg-flex">
                <Link to="/pricing" class="btn-get-started scrollto">
                  Get Started
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="venobox btn-watch-video"
                  data-vbtype="video"
                  data-autoplay="true"
                >
                  {" "}
                  Watch Video <i class="icofont-play-alt-2"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={src} className="img-fluid animated" alt=""></img>
            </div>
          </div>
        </div>
      </section>
      <ClientComponents />
    </div>
  );
};

export default Home;
