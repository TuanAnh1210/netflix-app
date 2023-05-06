import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }

    onAuthStateChanged(firebaseAuth, (curUser) => {
      if (curUser) {
        navigate("/");
      }
    });
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>

          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValue.email}
              onChange={(e) => {
                setFormValue({ ...formValue, email: e.target.value });
              }}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    password: e.target.value,
                  })
                }
              />
            )}

            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>

          <button onClick={handleSignIn}>Log In</button>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 32px;
      .text {
        gap: 10px;
        text-align: center;
        font-size: 24px;

        @media (max-width: 576px) {
          font-size: 20px;
        }
        h1 {
          font-size: 36px;
          padding: 0 48px;

          @media (max-width: 576px) {
            font-size: 20px;
          }
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;

        /* mobile */
        @media (max-width: 576px) {
          display: block;
        }

        input {
          color: black;
          border: none;
          padding: 16px 24px;
          font-size: 18px;
          border: 1px solid black;
          &:focus {
            outline: none;
          }

          /* mobile */
          @media (max-width: 576px) {
            padding: 10px 18px;
            width: 100%;
            margin-top: 6px;
          }
        }
        button {
          margin-left: 8px;
          padding: 16px 24px;
          background-color: #e50914;
          border-radius: 0px !important;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 20px;

          /* mobile */
          @media (max-width: 576px) {
            width: 100%;
            margin-left: 0;
            padding: 10px 24px;
            font-size: 16px;
            margin-top: 6px;
          }
        }
      }
      button {
        padding: 14px 32px;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 8px;
        font-weight: bolder;
        font-size: 20px;
      }
    }
  }
`;
