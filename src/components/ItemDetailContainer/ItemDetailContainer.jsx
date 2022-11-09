import React,{ useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Spinners } from '../Spinners/Spinners'
import { useParams } from 'react-router-dom';
import drawdata from '../../data/drawdata';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const getProductos = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(drawdata.find(product => product.id === Number(id) )), 1000)
        
      })

    useEffect(() => {
        getProductos()
        .then(response => setProducto(response))
        .finally(() => setIsLoading(false));
      }, [])

    
    return (
      <div className=''>
<div className="div"
disabled={isLoading}>{isLoading ? <Spinners/>: <ItemDetail producto={producto} key={producto.id} />}
</div>

        
      </div>




  );
};

