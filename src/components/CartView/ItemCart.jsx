import { useCartContext } from "../CartContext/CartContext";
import { BiTrash } from "react-icons/bi";
import useCurrency from "../Hooks/useCurrency";
// import { Link } from 'react-router-dom'

// FUNCION QUE MUESTRA DATA DE PRODUCTOS AGREGADOS EN VISTA CART
function ItemCart({ item }) {
  const { removeItem } = useCartContext();
  // const producto = drawData.find((producto) => producto.id === id)

  const precioTotalItem = item.precioOferta * item.quantity;
  const { formatter } = useCurrency();

  return (
    <div
      className="container pt-2 mb-2"
    >
      <div className="row">
        <div className="div-card-cart" key={item.id}>
          <table className="table caption-top  table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unidad</th>
                <th scope="col">Precio Total</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">1</th>
                <td>
                  <img
                          width="100"
                    className="img-fluid"
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td>{item.nombre}</td>
                <td>{item.quantity}</td>
                <td>{formatter.format(item.precioOferta)}</td>
                <td>{precioTotalItem}</td>
                <td>
                  <i
                    onClick={() => removeItem(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <BiTrash size={25} />
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
