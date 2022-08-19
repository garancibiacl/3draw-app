import React from 'react'
import { BiShoppingBag } from "react-icons/bi";


export const CartWidget = () => {
  return (
    <>
       <a className="d-flex text-decoration-none align-items-center " href="/">
        <BiShoppingBag size={25} />
                    <mark className="shake-hover bg-danger ">3</mark>
              </a>
              
    </>
  );
}