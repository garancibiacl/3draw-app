import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { ItemCount } from "../ItemCount/ItemCount";
import { ButtonLike } from "../ButtonLike/ButtonLike";
import { Link } from 'react-router-dom';
import  { useCartContext }  from "../CartContext/CartContext";



const Card = ({ producto}) => {
  const [count, setCount] = useState(1);

  const { addToCart } = useCartContext();

  const {id} = producto

  const Swal = require("sweetalert2");

  const onAdd = (count) => {
      producto.stock = producto.stock - count;
      addToCart(producto, count);
      Swal.fire({
        title: "Felicidades!",
        text: `Se han agregado ${count} productos`,
        icon: "success",
      });
  };



  return (
    <div className="thumb-wrapper">
      <div className="d-flex justify-content-between">
        <Link className="text-detail text-black mb-3" to={`/detalles/${id} `} >
          <BiChevronLeft size={25} />
          Ver Detalles
        </Link>
{/* PEGAR BOTON LIKE */}
<ButtonLike/>
      </div>
      <div className="img-box">
        <img 
          className="img-fluid"
          src={`${producto.image}`}
          alt={producto.name}
        />
      </div>
      <div className="thumb-content">
        <h4 className="card-text text-black">{producto.nombre}</h4>
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
        <p className="item-price">
          <strike>${producto.precioVenta}</strike>{" "}
          <b>${producto.precioOferta}</b>
        </p>
        <p className="item-stock"> {producto.stock} Disponibles</p>

    
        <ItemCount
          stock={producto.stock}
          onAdd={onAdd}
          count={count}
          setCount={setCount}
          min={1}
          sum={1}
          res={1}
        />


       
      </div>
    </div>
    
    
  );
};

export default Card;
