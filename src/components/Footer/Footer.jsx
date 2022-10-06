import React from 'react'

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
                <input type="email" id="form5Example29" className="form-control" />
        
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
    </div>
    <div className="row pb-3 pt-4 border-top">
        <div className="col-md-6">
        <p className="copyright">Hecho con ❤️&nbsp; &nbsp;de Gustavo © <a className='url-web' href="https://piensaentuweb.cl/" target="#">Piensa en tu Web</a>
          </p>
        </div>
        <div className="col-md-6 text-md-right">
          <p className="copyright">
            Copyright ©2022 All rights reserved.</p>
        </div>
      </div>
    {/* Copyright */}
  </footer>
  )
}
