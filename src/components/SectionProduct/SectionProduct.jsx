import React from "react";
import { Carrusel } from "../Carrusel/Carrusel";

export const SectionProduct = () => {
  return (
    <div className="container-bg mb-5">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center">ACCESORIOS ✨</h4>
          <h1 className="product__title text-center">Productos Destacados</h1>
          <Carrusel />
        </div>
      </div>
    </div>
  );
};
