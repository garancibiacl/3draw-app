
import { getProductos, getProducto} from "./firebase"
import { Link } from "react-router-dom"
import { async } from "@firebase/util"

import { BiChevronLeft } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
// import { ItemCount } from "../ItemCount/ItemCount";
import { ButtonLike } from "../components/ButtonLike/ButtonLike.jsx";
// import  { useCartContext }  from "../CartContext/CartContext";



// export const Card = ({ producto}) => {
//   const [count, setCount] = useState(1);

//   const { addToCart } = useCartContext();

//   const {id} = producto

//   const Swal = require("sweetalert2");

//   const onAdd = (count) => {
//       producto.stock = producto.stock - count;
//       addToCart(producto, count);
//       Swal.fire({
//         title: "Felicidades!",
//         text: `Se han agregado ${count} productos`,
//         icon: "success",
//       });
//   };

export const consultarDB = async () => {

    const productos = await getProductos()
    console.log(productos.docs)
    const items =  productos.docs.map(producto => [producto.id, producto.data()]) //Transformacion en array
    console.log(items)

    const productCard = items.map((producto, indice) => 
    
    <div className="thumb-wrapper" key={indice}>
    <div className="d-flex justify-content-between">
      <Link className="text-detail text-black mb-3"  to={`/detalles/`+ producto[0]} >   
        Ver Detalles
      </Link>
{/* PEGAR BOTON LIKE */}
<ButtonLike/>
    </div>
    <div className="img-box">
      <img 
        className="img-fluid"
        src={`${producto[1].imagen}`}
        alt={producto[1].name}
      />
    </div>
    <div className="thumb-content">
      <h4 className="card-text text-black">{producto[1].nombre}</h4>
      <div className="star-rating">
        <ul className="list-inline">
          <li className="list-inline-item">
            <BiStar />
          </li>
          <li className="list-inline-item">
            <BiStar />
          </li>
          <li className="list-inline-item">
            <BiStar />
          </li>
          <li className="list-inline-item">
            <BiStar />
          </li>
          <li className="list-inline-item">
            <BiStar />
          </li>
        </ul>
      </div>
      <p className="item-price">
        <strike>${producto[1].precioVenta}</strike>{" "}
        <b>${producto[1].precioOferta}</b>
      </p>
      <p className="item-stock"> {producto[1].stock} Disponibles</p>



     
    </div>
  </div>
  )
  console.log(productCard)
  return productCard
}




export const mostrarProductos = (carrito) => {
  let array = []
  const car = carrito.map((element) => consultarProducto(element.id))
  
  car.forEach(element => {
    element.then(data => array.push(data.data()))
  });
 
  return array
 
}

export const consultarProducto = async (id) => {
    const producto = await getProducto(id)
    return producto
}


