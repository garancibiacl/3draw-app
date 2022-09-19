
import { useCartContext } from "../CartContext/CartContext"
import drawData from "../../data/drawdata";
import { BiTrash } from "react-icons/bi";
import useCurrency from "../Hooks/useCurrency"

// FUNCION QUE MUESTRA DATA DE PRODUCTOS AGREGADOS EN VISTA CART
function ItemCart({ id, item}) {
    const {totalPrice, totalQuantity, removeItem} = useCartContext()
    const producto = drawData.find((producto) => producto.id === id)
    const { formatter } = useCurrency();
    return  (


        <div className="container" style={{marginTop: "10rem", marginBottom: "20rem"}}>
            <div className="row">
               
        <div className='div-card-cart' key={producto.id}>
                <table className="table caption-top">
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
          <tr>
            <th scope="row">1</th>
      
            <td><img className="img-fluid"
          src={`/assets/img/${producto.image}` }
          alt={producto.name}
        /></td>
            <td>{producto.nombre}</td>
            <td>{totalQuantity()}</td>
            <td>{formatter.format(producto.precioOferta)}</td>
            <td>{totalPrice()}</td>
            <td><a href="/" onClick={() => removeItem(id)}>
               <BiTrash size={25}/>
            </a></td>
          </tr>
          

        </tbody>
      </table>

            </div>
        
        </div>
        
        </div>
      

        



        
    )
}

export default ItemCart