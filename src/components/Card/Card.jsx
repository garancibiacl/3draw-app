import { React } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { ItemCount } from "../ItemCount/ItemCount";
import Wish from "../Helpers/wish";
// import { AddCart } from "../AddCart/AddCart";

export const Card = (reset) => {
  const Swal = require("sweetalert2");
  function onAdd(count) {
    Swal.fire({
      title: "Felicidades!",
      text: `Se han agregado ${count} productos`,
      icon: "success",
    
    });
  }
  
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
              <div className="item carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="d-flex justify-content-between">
                        <a
                          href="/"
                          className="text-black mb-3 text-decoration-none"
                        >
                          {" "}
                          <BiChevronLeft size={25} />
                          Ver Detalles
                        </a>

                        <span className="wish-icon" onClick={Wish}>
                          <BiHeart className="fa fa-heart-o" size={25} />
                        </span>
                      </div>
                      <div className="img-box">
                        <img
                          src="/assets/img/martillo-tor.png"
                          className="img-fluid"
                          alt="martillo-tor"
                        />
                      </div>
                      <div className="thumb-content">
                        <h4 className="card-text text-black">
                          Martillo de luz de Thor
                        </h4>
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
                          <strike>$40.000</strike> <b>$36.000</b>
                        </p>

                        <ItemCount
                          stock={5}
                          onAdd={onAdd}
                          min={1}
                          sum={1}
                          res={1}
                  
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"></div>
                </div>
              </div>
              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"></div>
                </div>
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
