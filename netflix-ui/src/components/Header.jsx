import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
const Header = (props) => {
  const navigate = useNavigate();

  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 0 4rem;
  @media (max-width: 576px) {
    padding: 0 1rem;
  }

  .logo {
    img {
      height: 72px;
    }
  }
  button {
    padding: 8px 18px;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 16px;

    @media (max-width: 576px) {
      padding: 6px 8px;
      font-size: 14px;
    }
  }
`;
