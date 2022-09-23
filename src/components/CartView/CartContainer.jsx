import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

function Cart() {
  const { cartList, totalFinal } = useCartContext();

  return (
    <div className="container" style={{ margin: "10rem auto" }}>
      <h3 className="text-st mb-4">
        <BiCart size={35} /> Mi Carrito de Compras
      </h3>
      <div className="row">
        {cartList.length ? (
          <div class="card">
            {cartList.map((producto) => (
              <ItemCart id={producto.id} key={producto.id} item={producto} />
            ))}

            <div className="row mb-3">
              <h3 className="text-end mb-4">Total compra: {totalFinal()}</h3>
              {/* <button className="btn" onClick={() => clear()}> limpiar carrito</button>  */}
              <hr />
              <div className="col-6">
                <Link
                  type="button"
                  to="/"
                  className="btn  "
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  href="/"
                >
                  <BiLeftArrowAlt size={25} />
                  Continuar comprando
                </Link>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <Link
                  type="button"
                  to="/cart"
                  className="btn btn-secondary btn-primary-mb rounded-pill"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  href="/"
                >
                  Checkout <BiRightArrowAlt size={25} />
                </Link>
              </div>
            </div>
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
              >
                <BiLeftArrowAlt />
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
