import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";


export const SectionPrototype = () => {
  return (
    <div className="mt-5 mb-5 service__bg" >
      
    <div className="container ">
      <div className="  col-md-12 ">
        <div className="row ">
          <div className="col-md-6 mt-5 animate__animated animate__fadeIn">
            <h4>PROTOTYPE 🔥</h4>
            <h1 className="service__title">Impresión 3D<b style={{color: '#e83283'}}>.</b></h1>
            <p className="service__description mb-4">
              Los obejetos impresos <strong>útiles en 3D</strong> que puedes tener donde 
              tu imaginas, fabricado con materiales <strong>orgánicos y ecoamigables</strong>
            </p>
            <button
              type="button"
              className="btn btn-lg btn-outline-light  rounded-pill"
            >
              Ver productos
              <BiRightArrowAlt/>
            </button>
            <img src="assets/img/icons-service.png" class="img-fluid mt-4" alt="img-fluid"></img>

          </div>
          <div className="col-md-6">
          <div className="row gx-5">
        <div className="col-md-6">  
          <div className="p-3 text-end animate__animated animate__fadeInUp">
          <img src="assets/img/macetero-group.png" class="img-fluid mt-4" alt="img-fluid"></img>
          </div>
        </div>
        <div className="col-md-6 animate__animated animate__fadeInUp">
          <div className="p-3">
          <img src="assets/img/accesorios-group.png" class="img-fluid mt-4" alt="img-fluid"></img>
          </div>
        </div>

        <div className="col-md-6 animate__animated animate__fadeInUp">
          <div className="p-3 text-end">
          <img src="assets/img/producciones-group.png" class="img-fluid mt-4" alt="img-fluid"></img>
          </div>
        </div>
        <div className="col-md-6 animate__animated animate__fadeInUp">
          <div className="p-3">
          <img src="assets/img/figuras-group.png" class="img-fluid mt-4" alt="img-fluid"></img>
          </div>
        </div>





      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
