import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
