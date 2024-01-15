import React from "react";

const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> service.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src="/clock.svg" alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/teamwork.svg" alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/diaphragm.svg" alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/money.svg" alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <img src="/home2.png" alt="home2" />
    </div>
  );
};

export default ServiceSection;
