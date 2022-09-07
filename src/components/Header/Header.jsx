import React from "react";


export const Header = ({ title }) => {
  return (
    <div className="pt-4 text-white">
      <header className=" header__bg py-5 mt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6  ">
              <h1 className="header__title mb-4 animate__animated animate__fadeInDown">
                Impresiones realmente<strong> útiles</strong> en{" "}
                <strong> 3D </strong>
              </h1>
              <div className="header__icons d-flex">
                <img className="animate__animated animate__heartBeat" src="/assets/img/icons-figma.svg" alt="" />
                <img className="animate__animated animate__heartBeat" src="/assets/img/icons-react.svg" alt="" />
                <img className="animate__animated animate__heartBeat" src="/assets/img/icons-html-5.svg" alt="" />
              </div>
              <div>
                <a className="mouse__container d-flex mt-5 animate__animated animate__fadeInUp" href="/">
                  <span className="mouse-btn">
                    <span className="mouse-scroll "></span>
                  </span>
                  <h1 className="mouse__scroll">Scroll Down</h1>
                </a>
              </div>
            </div>
            <div className="col-md-6 header__img animate__animated animate__zoomIn">
              <img className="header__img " src="/assets/img/icons-header.png" alt="" />
            </div>
          </div>
        </div>
        {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        class="position-absolute width-full z-1"
        style={{
          bottom: "0px",
        }}
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#4a1a89"></path>
      </svg> */}
      </header>
 
    </div>
  );
};
