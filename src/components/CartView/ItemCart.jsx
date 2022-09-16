
import { useCartContext } from "../CartContext/CartContext"
import drawData from "../../data/drawdata";
import { BiTrash } from "react-icons/bi";

// FUNCION QUE MUESTRA DATA DE PRODUCTOS AGREGADOS EN VISTA CART
function ItemCart({ id, cant}) {
    const { removeItem } = useCartContext()
    const producto = drawData.find((el) => el.id === id)
    return (


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
            <td>{cant}</td>
            <td>{producto.precioOferta}</td>
            <td>{producto.precioOferta * cant}</td>
            <td>    <a href="/" onClick={() => removeItem(id)}>
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