import { initializeApp } from "firebase/app";
import { collection, addDoc, getDoc, doc, getDocs, deleteDoc, updateDoc, getFirestore,  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "draw-app-b5e81.firebaseapp.com",
  projectId: "draw-app-b5e81",
  storageBucket: "draw-app-b5e81.appspot.com",
  messagingSenderId: "688885590523",
  appId: "1:688885590523:web:06ce9d252c7828510fc35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

async function cargarBaseDeDatos  () {
    const promise = await fetch('../data/drawdata.js')
    const productos = await promise.js()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            categoria: producto.category,
            descripcion: producto.description,
            cantidad: producto.stock,
            precioVenta: producto.precioVenta,
            precioOferta: producto.precioOferta,
            imagen: producto.imagen
          });
    })
    
}

const getProducto = (id) => {
  getDoc(doc(db,"productos",id))
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  return productos
}

export {db,app, cargarBaseDeDatos, getProducto, getProductos}