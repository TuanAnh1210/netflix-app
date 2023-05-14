import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import styled from "styled-components";

import logo from "../assets/logo.png";

const Navbar = ({ isScroll }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);

  const refIpt = useRef();

  const handleShowSearch = () => {
    setShowSearch(true);
    setInputFocus(true);
  };

  const handleHideSearch = () => {
    setShowSearch(false);
    setInputFocus(false);
  };

  useEffect(() => {
    if (inputFocus) {
      refIpt.current.focus();
    }
  }, [inputFocus]);

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <Container>
      <nav>
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <ul>
          {links.map(({ name, link }, index) => (
            <li key={index}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className="actions">
          <div className={`searchs ${showSearch ? "show-search" : ""}`}>
            <button onClick={handleShowSearch}>
              <FaSearch />
            </button>
            <input
              ref={refIpt}
              type="text"
              placeholder="Search..."
              onBlur={handleHideSearch}
            />
          </div>

          <button className="logout-btn" onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  nav {
    position: sticky;
    top: 0;
    height: 80px;
    position: fixed;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64px;
    transition: 0.3s ease-in-out;

    .brand {
      img {
        height: 72px;
      }
    }

    ul {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      margin-left: 20px;

      li {
        list-style: none;
        color: white;
        a {
          font-size: 18px;
          text-decoration: none;
          padding: 0 28px;
          color: #fff;

          &:hover {
            color: red;
          }
        }
      }
    }

    .actions {
      display: flex;
      .searchs {
        display: flex;
        align-items: center;
        padding: 4px 6px;
        margin-right: 16px;

        button {
          background-color: transparent;
          color: #fff;
          border: none;
          font-size: 18px;
          &:hover {
            cursor: pointer;
          }
        }

        input {
          padding: 2px 8px;
          color: #fff;
          border: none;
          outline: none;
          display: none;

          transition: 0.3s ease-in-out;
          background-color: transparent;
        }
      }

      .show-search {
        border: 1px solid #ccc;

        input {
          display: block;
          transition: 0.3s ease-in-out;
        }
      }

      .logout-btn {
        background-color: transparent;
        border: none;
        color: red;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
`;
