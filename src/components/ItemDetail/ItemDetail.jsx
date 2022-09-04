import React, { useState } from "react";
import { ItemCountDetail } from "../../ItemCountDetail/ItemCountDetail";
import { BiStar } from "react-icons/bi";
import { ButtonLike } from "../ButtonLike/ButtonLike";

export const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(1);
    const Swal = require("sweetalert2");
    function onAdd(count) {
      Swal.fire({
        title: "Felicidades!",
        text: `Se han agregado ${count} productos`,
        icon: "success",
      });
      setCount(1);
    }
  return (
    <>
      <div className="container container__detail">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
          
            <li className="breadcrumb-item active">{producto.nombre}</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-6 d-flex p-4 justify-content-center align-content-center">
          <div className="card mb-3 p-5" style={{ maxWidth: "50rem" }}>
            <img
              className="rounded mx-auto d-block"
              src={`/assets/img/${producto.image}`}
              alt={producto.name}
            />
          </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-light mb-3" style={{ maxWidth: "50rem" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                <h4 className="card-title">{producto.nombre}</h4>
                <ButtonLike/>
                </div>
                <div className="star-rating">
          <ul className="list-inline">
            <li className="list-inline-item">
              <BiStar />
            </li>
            <li className="list-inline-item">
              <BiStar />
            </li>
            <li className="list-inline-item">
              <BiStar />
            </li>
            <li className="list-inline-item">
              <BiStar />
            </li>
            <li className="list-inline-item">
              <BiStar />
            </li>
          </ul>
        </div>
                <p className="card-text pt-1 pb-1">{producto.description}</p>
                <p className="item-price">
                  <strike className="text-black-50">${producto.precioVenta}   </strike>
                  <b>${producto.precioOferta}</b>
                </p>
                <p className="item-stock"> {producto.stock} Disponibles</p>
        <ItemCountDetail
                 stock={producto.stock}
                 onAdd={onAdd}
                 count={count}
                 setCount={setCount}
                 min={1}
                 sum={1}
                 res={1}/>
    <p className="text-black-50"> Categoría: {producto.category}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
