import { React, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
// import {AddCart} from '../AddCart/AddCart';
// import { useCounter } from '../Hooks/useCounter'
//TODO
export const ItemCount = ({ stock, count, setCount, onAdd, min, sum, res }) => {
  // const [count, setCount] = useState(min);
  const [disabledAdd, setDisabledAdd] = useState(false);
  const [disabledRest, setDisabledRest] = useState(false);


  function add() {
    if (count < stock) {
      setCount(count + sum);
      setDisabledAdd(false);
      setDisabledRest(false);
    }
    if (count === stock - 1) {
      setDisabledAdd(true);
    }
  }

  function substract() {
    if (count > min) {
      setCount(count - res);
      setDisabledRest(false);
      setDisabledAdd(false);
    }
    if (count === min + 1) {
      setDisabledRest(true);
    }
  }
  // function reset(){
  //     setCount(min)
  // }

  return (
    <div class="input-group count__container">
      <div
        class="btn-group btn-group-sm count__container"
        role="group"
        aria-label="Small button group"
      >
        <button
          type="button"
          class="btn-minus btn btn-light"
          // onClick={() => setCounter(counter - 1)}
          onClick={substract}
          disabled={disabledRest}
        >
          <BiMinus size={20} />
        </button>
        {/* <p>{stock}</p> */}
        <h4 className="d-flex align-items-center text-black">{count}</h4>
        <button
          type="button"
          class="btn-minus btn btn-light"
          // onClick={() => setCounter(counter + 1)}
          onClick={add}
          disabled={disabledAdd}
        >
          <BiPlus size={20} />
        </button>

      </div>

      <div className="col-12">
        <button  className="btn btn-primary rounded-pill"  onClick={() => onAdd(count)}>
       <MdAddShoppingCart size={20} style={{marginRight: "10px"}}/>
 Agregar al carrito
  </button>
  </div>
    </div>
  );
};
