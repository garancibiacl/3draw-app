import React, {useState} from 'react';
// import { ItemCount } from '../ItemCount/ItemCount'
import { BiShoppingBag } from "react-icons/bi";

export const CartWidget = () => {
  const [count] = useState(1);


  return (
    <>
      <a className="d-flex text-decoration-none align-items-center " href="/">
        <BiShoppingBag size={25} />
        <mark className="shake-hover bg-danger "  >{count}</mark>
      </a>

  
      
    </>
  );
};
