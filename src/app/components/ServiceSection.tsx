"use client";
import React from "react";
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

const ServiceSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> service.
        </h2>
        <Cards className="">
          <Card>
            <div className="icon">
              <img src="/clock.svg" alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src="/teamwork.svg" alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src="/diaphragm.svg" alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src="/money.svg" alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src="/home2.png" alt="home2" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding-top: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 19rem;
  .icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    h3 {
      margin-left: true;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;
