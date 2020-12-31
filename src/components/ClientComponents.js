import React from "react";
import client1 from "../assets/images/clients/client-1.png";
import client2 from "../assets/images/clients/client-2.png";
import client3 from "../assets/images/clients/client-3.png";
import client4 from "../assets/images/clients/client-4.png";
import client5 from "../assets/images/clients/client-5.png";
import client6 from "../assets/images/clients/client-6.png";
const ClientComponents = () => {
  return (
    <section id="cliens" class="cliens section-bg mb-2">
      <div class="container">
        <div class="row" data-aos="zoom-in">
          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client1} class="img-fluid" alt=""></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client2} class="img-fluid" alt=""></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client3} class="img-fluid" alt=""></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client4} class="img-fluid" alt=""></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client5} class="img-fluid" alt=""></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client6} class="img-fluid" alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientComponents;
