"use client";
import React from "react";
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </p>
          <button>Contact us</button>
        </div>
      </Description>
      <Image>
        <img src="/home1.png" alt="image" />
      </Image>
    </About>
  );
};

// Styled Component

export default AboutSection;
