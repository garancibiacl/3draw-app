import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
// import {services}  from '../Header/Header'
export const SectionService = () => {
  return (
    <div className="mt-5 mb-5 service__bg">
      
      <div className="container ">
        <div className="  col-md-12 ">
          <div className="row ">
            <div className="col-md-6 mt-5 animate__animated animate__fadeIn">
              <h4>OVERVIEW 🔥</h4>
              <h1 className="service__title">Nuestros Servicios<b style={{color: '#e83283'}}>.</b></h1>
              <p className="service__description mb-4">
                ¿Tienes una idea o un proyecto? <strong>¿No sabes cómo hacer tu diseño
                en 3D?</strong> ¡Te lo diseñamos nosotros! Para luego llegar a imprimirlo
                o usarlo para otros fines.
              </p>
              <button
                type="button"
                className="btn btn-lg btn-outline-light  rounded-pill"
              >
                Cotiza tu proyecto 
                <BiRightArrowAlt/>
              </button>
              <img src="assets/img/icons-service.png" className="img-fluid mt-4 service__animation" alt="img-fluid"></img>

            </div>
            <div className="col-md-6">
              <img
                className="service__rotate img-fluid"
                src="/assets/img/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
