import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>

        <video src={video} autoPlay loop controls muted></video>
      </div>
    </Container>
  );
};

export default Player;

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 8px;
      font-size: 22px;
      cursor: pointer;
      z-index: 10;
      top: 0;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
