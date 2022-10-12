import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import drawData from "../../data/drawdata";
import { useParams } from 'react-router-dom';
import { Dna } from  'react-loader-spinner'


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
              disabled={isLoading}>{isLoading ? <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
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