import React,{ useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import  { db }  from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
export const ItemDetailContainer = () => {
  const {id} = useParams()
  const [producto, setProducto] = useState({})


  
  const getProducto = async (id) => {
      const document = doc(db, "productos", 'xrPZqHdH3bHzI17P3gsd')
      const response = await getDoc(document)
      const producto = {id: response.id, ...response.data()}
      setProducto(producto)
  }
  useEffect(() => {
      getProducto()
  }, [])
  


    
    return (
      <div className=''>
<div className="div"> 
<ItemDetail producto={producto} key={producto.id}   />
</div>

      
      </div>




  );
};
