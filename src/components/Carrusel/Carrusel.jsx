import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import drawData from "../../data/drawdata";
import { Dna } from  'react-loader-spinner'

export const Carrusel = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(drawData);
      }, 4000);
    });

    getProductos
      .then((response) => setProducto(response))
      // .catch((err) => console.log(err));
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Carousel indicators  */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              <div className="item carousel-item active " 
              disabled={isLoading}>{isLoading ? <Dna
  visible={true}
  height="80"
  width="80"
  paddingTop="70"
  ariaLabel="dna-loading"
  wrapperStyle={{margin:"15rem"}}


  wrapperClass="dna-wrapper"/> : (
                  <ItemList data={producto} />
                )}
              </div>
             
            </div>

            {/* Carousel controls */}
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
