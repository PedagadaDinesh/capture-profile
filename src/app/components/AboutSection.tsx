import React from "react";

const AboutSection = () => {
  return (
    <div className="description h-screen bg-black text-white">
      <div className="title">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>
            your <span>dreams</span> come
          </h2>
        </div>
        <div className="hide">
          <h2>true.</h2>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <div>
        <img src="/home1.png" alt="image" />
      </div>
    </div>
  );
};

export default AboutSection;
