import React, { useState, useEffect } from "react";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = (saludos) => {
  const [navSize, setnavSize] = useState("6rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#17174A") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("rem") : setnavSize("6rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/img/brand.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse mt-1" id="navbarColor01">
            <ul className="navbar-nav me-auto fw-light p-2">
              <li className="nav-item ">
                <a
                  className=" hvr-underline-from-center  nav-link active"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="hvr-underline-from-center nav-link " href="/">
                  Servicio
                </a>
              </li>
              <li className="nav-item">
                <a className="hvr-underline-from-center nav-link" href="/">
                  Tienda
                </a>
              </li>
            </ul>
            <div className="container__navRight shake-hover d-flex ">
              {/* Components CartWidget */}
              <CartWidget />
              {/* Components ButonLogin */}
              <ButtonLogin />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
