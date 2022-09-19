import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { BiLeftArrowAlt } from "react-icons/bi";

function Cart() {
  const { cartList, clear } = useCartContext();

  return (
    <div className="container" style={{ margin: "17rem auto" }}>
      <div className="row">
        {cartList.length ? (
          <div class="card">
            {cartList.map((producto) => (
              <ItemCart
                id={producto.id}
                key={producto.id}
                cant={producto.cant}
              />
            ))}
            {/* <button className="btn" onClick={() => clear()}> limpiar carrito</button>  */}
          </div>
        ) : (
          <div className="card alert alert-dismissible alert-primary border-light mb-3">
            <h1 className="text-center">¡TU CARRITO ESTÁ VACÍO!</h1>
            <p className="text-center">
              ¿Aún no te haz decidido? Tenemos productos que te encantarán.
            </p>
            <p className="text-center">
              Si no sabes dónde empezar te recomiendo{" "}
              <Link to="/">
                <strong>nuestra página de servicios </strong>
              </Link>
               o la lista de{" "}
              <Link to="/categoria/Soporte">
                <strong>los más vendidos</strong>
              </Link>
            </p>
            <div className="col-12 mt-3 text-center">
              <Link
                to="/"
                class="btn btn-lg btn-primary rounded-pill"
                type="button"
              ><BiLeftArrowAlt/>
                Volver a la tienda
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
