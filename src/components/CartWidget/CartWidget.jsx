import React from 'react';
// import { ItemCount } from '../ItemCount/ItemCount'
import { BiShoppingBag } from "react-icons/bi";
import { useCartContext } from "../CartContext/CartContext"
import { Link } from 'react-router-dom';
export const CartWidget = () => {
  const {totalQuantity} = useCartContext()


  return (
    <>
      <Link type="button"  to="/cart" className="d-flex text-decoration-none align-items-center" data-bs-toggle="tooltip" data-bs-placement="bottom" href="/">
        <BiShoppingBag size={25} />
        {}
        <mark className="shake-hover bg-danger "  >{totalQuantity()}</mark>
      </Link>

  
      
    </>
  );
};
