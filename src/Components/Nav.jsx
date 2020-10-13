import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../Resources/trailer-flix-logo.png";
import avatar from "../Resources/netflix-avatar.png";

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <a href="/" className="nav-logo-container">
        <img className="nav-logo" src={logo} alt="Trailer Flix" />
      </a>

      <img className="nav-avatar" src={avatar} alt="Avatar" />
    </div>
  );
}
