import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Checkout = (item) => {

  
  return (
    <>
      <div className="breadcrumbs" style={{ paddingTop: "10rem" }}>
        <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Checkout</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 justify-content-end d-flex">
        <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <Link to='/' className="hvr-underline-from-center nav-link ">
                  Home
                </Link></li>
        <li className="breadcrumb-item">
        <Link to='/cart' className="hvr-underline-from-center nav-link ">
                  Carrito
                </Link>
        </li>
        <li className="breadcrumb-item active">Checkout</li>
      </ol>

        </div>
      </div>
        </div>
      </div>



      <section className="checkout-wrapper section pt-4 b-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

            <div class="accordion pb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Tus datos personales
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">

        <section
        className="checkout-steps-form-content collapse show"
        id="collapseThree"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
        style={{}}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="single-form form-default">
              <div className="row">
                <div className=" col-md-6 form-group">
                  <label
                    className="col-form-label"
                    htmlFor="inputDefault"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese Nombres"
                    id="inputDefault"
                  />
                </div>

                <div className=" col-md-6 form-group">
                  <label
                    className="col-form-label"
                    htmlFor="inputDefault"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellidos"
                    id="inputDefault"
                  />
                </div>
              </div>
            </div>
          </div>



        <div className="col-md-12">
            <div className="single-form form-default">
              <div className="row">
                <div className=" col-md-6 form-group">
                  <label
                    className="col-form-label mt-2"
                    htmlFor="exampleInputEmail1"
                  >
                    Email
                  </label>
                  <input
                 type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                  />
                </div>

                <div className=" col-md-6 form-group">
                  <label
                    className="col-form-label mt-2"
                    htmlFor="inputDefault"
                  >
                   Télefono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese número"
                  />
                </div>
              </div>
            </div>
          </div>








          <div className=" col-md-12 form-group">
                  <label
                    className="col-form-label mt-2"
                    htmlFor="inputDefault"
                  >
           Dirección de envio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese dirección"
                  />
                </div>



                           <div className="col-md-12">
            <div className="single-form form-default">
              <div className="row">
                <div className=" col-md-6 form-group">
                  <label
                    className="col-form-label mt-2"
                    htmlFor="inputDefault"
                  >
                   Cuidad
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese país"
                    id="inputDefault"
                  />
                </div>

                <div className=" col-md-6 form-group">
                <label htmlFor="exampleSelect1" className="col-form-label mt-2">Región</label>
<select className="form-select" id="exampleSelect1">
<option>Tarapacá</option>
<option>Antofagasta</option>
<option>Atacama y Coquimbo</option>
<option>Aconcagua y Valparaíso</option>
<option>O'Higgins y Colchagua</option>
</select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
         

            <div className="form-check mt-3">
<input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
<label className="form-check-label" htmlFor="flexCheckChecked">
Mis direcciones de envío y envío son las mismas.
</label>
</div>
          </div>
          <div className="col-md-12">
            <div className="single-form button">
            <button type="submit" class="btn btn-secondary btn-primary-mb rounded-pill mt-2 mb-3">Finalizar Compra<BiRightArrowAlt size={25} /></button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Dirección de Envío
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Información de Pago
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>




            </div>
            <div className="col-lg-4">
              <div className="checkout-sidebar">
                <div className="checkout-sidebar-coupon">
                  <p>Aplicar cupon para obtener descuento!</p>
                  <form action="#">
                  <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Ingrese código del cupón" aria-label="Ingrese código del cupón" aria-describedby="button-addon2" />
        <button className="btn btn-primary" type="button" id="button-addon2">Aplicar</button>
      </div>
                  </form>
                </div>
                {/* <div className="checkout-sidebar-price-table mt-30">
                  <h5 className="title">Pricing Table</h5>
                  <div className="sub-total-price" >
                    <div className="total-price" key={item.id}>
                      <p className="value">Subotal Price:</p>
                      <p className="price">{item.nombre}</p>
                    </div>
                    <div className="total-price shipping">
                      <p className="value">Subotal Price:</p>
                      <p className="price">$10.50</p>
                    </div>
                    <div className="total-price discount">
                      <p className="value">Subotal Price:</p>
                      <p className="price">$10.00</p>
                    </div>
                  </div>
                  <div className="total-payable">
                    <div className="payable-price">
                      <p className="value">Subotal Price:</p>
                      <p className="price">$164.50</p>
                    </div>
                  </div>
                  <div className="price-table-btn button">
                    <a href="/" className="btn btn-alt">
                      Checkout
                    </a>
                  </div>
                </div>
                <div className="checkout-sidebar-banner mt-30">
                  <a href="product-grids.html">
                    <img src="assets/images/banner/banner.jpg" alt="#" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
