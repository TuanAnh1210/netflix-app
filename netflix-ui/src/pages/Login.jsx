import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
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
        <Header />
        <div className="form_container">
          <div className="form">
            <h1>Login</h1>
            <div className="form_group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="form_group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <button onClick={handleLogin}>Login to your account</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    .form_container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .form {
        height: 500px;
        width: 520px;
        padding: 54px;
        margin: auto;

        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;

        h1 {
          margin-bottom: 44px;
        }

        .form_group {
          display: flex;
          flex-direction: column;
          margin-top: 12px;

          input {
            padding: 8px 24px;
            font-size: 16px;
            margin-top: 6px;
          }
        }

        button {
          display: flex;
          margin: 24px auto 0 auto;
          background-color: rgb(229, 9, 20);
          padding: 10px 24px;
          font-size: 18px;
          color: #fff;
          border: none;

          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
