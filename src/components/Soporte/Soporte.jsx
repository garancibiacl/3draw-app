import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import drawData from "../../data/drawdata";
import { JellyTriangle } from '@uiball/loaders'
import { useParams } from 'react-router-dom';



export const Soporte = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoria } = useParams()


  useEffect(() => {
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(drawData.filter(producto => producto.category === categoria));
        /* reject('HOLA'); */
      }, 2000);
    });

    getProductos
      .then((response) => setProducto(response))
      // .catch((err) => console.log(err));
      .finally(() => setIsLoading(false));
  }, [categoria]);

  return   (
    <div className="container-xl mt-5">
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
        
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              <div className="item "
              disabled={isLoading}>{isLoading ? <JellyTriangle 
                size={60}
                speed={1.75} 
                color="#8733FF"

               />: <ItemList data={producto}  /> }
     
              </div>
              <div className="item carousel-item">
                <ItemList data={producto} />
              </div>
              <div className="item carousel-item">
                <ItemList data={producto} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};