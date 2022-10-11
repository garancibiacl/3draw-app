import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export const PageError = () => {
  return (
    <div className="container__body">
      <header className="top-header"></header>
      {/*dust particel*/}
      <div>
        <div className="starsec" />
        <div className="starthird" />
        <div className="starfourth" />
        <div className="starfifth" />
      </div>
      {/*Dust particle end-*/}
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable" />
          <div className="cover" />
          <div className="in-cover">
            <div className="bulb" />
          </div>
          <div className="light" />
        </div>
      </div>
      {/* END Lamp */}
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Page Not Found</h1>
            <p className="message__text">
              Lo sentimos, la página que buscaba no se encuentra aquí. El enlace
              que siguió puede estar roto o ya no existe. Vuelva a intentarlo o
              eche un vistazo a nuestro.
            </p>
          </div>

          <div className="error__nav e-nav">
            <div className="col-12 mt-3 text-center">
              <Link to="/" class="e-nav__link" type="button">
                <BiLeftArrowAlt />
              </Link>
            </div>
          </div>
        </div>
        {/* END Content */}
      </section>
    </div>
  );
};
