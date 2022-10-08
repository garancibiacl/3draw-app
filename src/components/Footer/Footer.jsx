import React from 'react'
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


export const Footer = () => {
  return (
    <footer className="bg-footer text-center text-white">
    <div className="container p-4 pt-5">
      <section className>
        <form action>
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <h4 className='text-suscribe'>
Suscríbete a <strong>nuestro boletín</strong>

</h4>
              </p>
            </div>
            <div className="col-md-5 col-12">
              <div className="form-outline form-white">
                <input type="email" id="form5Example29" className="form-control" placeholder="contacto@tucorreo.cl" />
        
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
            <div className="col-md-12 text-center">
            <img className='mail-gif' alt='correo'  src="https://images.ui8.net/res/robot/image/upload/mailbox_rth0nv/1509555601.gif"></img>
            </div>
          </div>
        </form>
      </section>
      <div className="row  pt-4 border-top">
        <div className="col-md-6 text-start">
        <p className="copyright">Hecho con ❤️ &nbsp;de Gustavo © <a  className='url-web__copyright' href="https://piensaentuweb.cl/">Piensa en tu Web</a>
          </p>
        </div>
        <div className="col-md-6 text-end">
         
        <a href="https://www.linkedin.com/in/gustavo-arancibia-53127a97/"  className="me-4 btn-secondary">
        <AiFillLinkedin size={25} />
        </a>
        <a href="https://github.com/garancibiacl"  className="me-4 btn-secondary">
        <AiOutlineGithub size={25} />
        </a>
        <a href="https://github.com/garancibiacl"  className="btn-secondary">
        <AiFillInstagram size={25} />
        </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
  </footer>
  )
}
