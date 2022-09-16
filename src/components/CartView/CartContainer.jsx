import { useCartContext } from "../CartContext/CartContext"
import {Link} from 'react-router-dom'
import ItemCart from "./ItemCart"



function Cart() {
    const {cartList, clear} = useCartContext()
    
    return (
    <>  
        {cartList.length ? 
        <div className="carrito-lleno">
            {cartList.map(producto => <ItemCart id={producto.id} key={producto.id} cant={producto.cant}/>)}
            {/* <button className="btn" onClick={() => clear()}> limpiar carrito</button>  */}
        </div>
        :
        <div className="carrito-vacio">
            <h1>Tu carrito está vacío</h1>
            <Link to="/productos">
                <button className="btn">ver productos</button>
            </Link>
        </div>}
    </>
    )
}

export default Cart