import React,{ useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Dna } from  'react-loader-spinner'
import { useParams } from 'react-router-dom';
import drawdata from '../../data/drawdata';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const getProductos = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(drawdata.find(product => product.id === Number(id) )), 2000)
        
      })

    useEffect(() => {
        getProductos()
        .then(response => setProducto(response))
        .finally(() => setIsLoading(false));
      }, [])

    
    return (
      <>
      <div className='containerfluid' >
<div className="row " >
<div className='col-12 justify-content-center d-flex  '
 disabled={isLoading}>{isLoading ? <Dna
  visible={true}
  height="80"
  width="80"
  paddingTop="70"
  ariaLabel="dna-loading"
  wrapperStyle={{margin:"20rem"}}


  wrapperClass="dna-wrapper"/>: <ItemDetail producto={producto} key={producto.id} />}
</div>
</div>
        
      </div>

      </>


  );
};

