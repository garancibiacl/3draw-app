import React from "react";
import { Carrusel } from "../Carrusel/Carrusel";
// import { ItemDetail } from "../ItemDetail/ItemDetail";

export const SectionProduct = ({ data })  => {
  return (
    <div className="container-bg mb-5">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center">ACCESORIOS ✨</h4>
          <h1 className="product__title text-center">Productos Destacados</h1>
          <Carrusel />
    
          {/* <div className="d-flex mb-3" style={{ gridGap: "20px" }}>
        {data.map((producto) => (
          <ItemDetail  producto={producto} key={producto.id} />
        ))}
     
      </div> */}



        </div>
      </div>
    </div>
  );
};
