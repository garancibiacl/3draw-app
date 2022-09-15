import React, {useState, useContext} from 'react';
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { CarritoContext } from '../components/CartContext/CartContext';

export const  ItemCountDetail = ({producto, stock, count, setCount, onAdd, min, sum, res }) => {
    // const [count, setCount] = useState(min);
    // export const  ItemCountDetail = (props) => {
    //   const {stock, count, setCount, onAdd, min, sum, res } = props.item;
  
    const [disabledAdd, setDisabledAdd] = useState(false);
    const [disabledRest, setDisabledRest] = useState(false);
    const {carrito, agregarProductoCarrito} =  useContext(CarritoContext);
    const [cantidad, setCantidad] = useState(min);

    // const { addToCart } = useContext(CarritoContext)




    const agregarAlCarrito = (producto) => {
      const productoCarrito = {id: producto, cantidad: cantidad}  
      agregarProductoCarrito(productoCarrito)
      console.log(carrito)
  }




    function cantidadProducto () {
      if (count < stock) {
        setCount(count + sum);
        setDisabledAdd(false);
        setDisabledRest(false);
        setCantidad(cantidad + 1)
        // addToCart(props.item,count);
      }
      if (count === stock - 1) {
        setDisabledAdd(true);
        setCantidad(cantidad - 1)
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
      <div class="input-group count__container-detail mt-3 mb-3">
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
          <h4 className="d-flex align-items-center text-black">{count}</h4>
          <button
            type="button"
            class="btn-minus btn btn-light"
            // onClick={() => setCounter(counter + 1)}
            // onClick={add}
             onClick={cantidadProducto}
            disabled={disabledAdd}
          >
            <BiPlus size={20} />
          </button>
  
        </div>
  
        <div className="col-6">
        <button className='btn btn-primary-detail rounded-pill'    onClick={() => agregarAlCarrito(count, producto, cantidad)}>
          {/* <button  className="btn btn-primary-detail rounded-pill"  onClick={() => onAdd(count)}> */}
         <MdAddShoppingCart size={20} style={{marginRight: "10px"}}/>
   AGREGAR AL CARRITO
    </button>
    </div>
      </div>
    );
  };
  