import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import subLogo from "../assets/homeTitle.webp";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScroll={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />

        <div className="container">
          <div className="logo">
            <img src={subLogo} alt="" />
          </div>
          <div className="btns-group">
            <button onClick={() => navigate("/player")} className="btn-play">
              <span>
                <FaPlay />
              </span>
              Play
            </button>
            <button className="btn-info">
              <span>
                <AiOutlineInfoCircle />
              </span>
              More Info
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Netflix;

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
      width: 100vw;
      height: 100vh;
    }

    .container {
      position: absolute;
      padding: 0 64px;
      bottom: 32px;

      .btns-group {
        margin-top: 32px;
        display: flex;
        button {
          padding: 6px 20px;
          border-radius: 4px;
          border: none;
          font-size: 18px;
          display: flex;
          align-items: center;

          span {
            margin-right: 4px;
            height: 20px;
            width: 20px;
          }
        }

        .btn-play {
          margin-right: 28px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        }

        .btn-info {
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 1);
          }
        }
      }
    }
  }
`;
