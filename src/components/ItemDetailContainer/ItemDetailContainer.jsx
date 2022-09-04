import React,{ useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import drawdata from '../../data/drawdata';


export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState({})
    const getProductos = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(drawdata.find(product => product.id === Number(id) )), 1000)
      })

    useEffect(() => {
        getProductos()
        .then(response => setProducto(response))
      }, [])


    
    return (
      <div className=''>

          <ItemDetail producto={producto} key={producto.id} />
        
      </div>




  );
};