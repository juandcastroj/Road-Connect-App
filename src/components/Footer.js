import React from 'react'
import'../styles/styleFooter.css'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Road Connect</h1>
        <h2>Contacto</h2>
        <address>
          5534 Somewhere In. The World 22193-10212<br></br>
            <a className="footer__btn" href="mailto:example@gmail.com">Escríbenos</a>
        </address>
      </div>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>
          <ul className="nav__ul">
            <li>
              <a href="#home">Online</a>
            </li>
            <li>
              <a href="#home">Print</a>
            </li>
          </ul>
        </li>
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Tecnologia</h2>
          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#home">Digital Signage</a>
            </li>
            <li>
              <a href="#home">Automation</a>
            </li>
            <li>
              <a href="#home">Artificial Intelligence</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="#home">Privacy Policy</a>
            </li>

            <li>
              <a href="#home">Terms of Use</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="legal">
        <h6>&copy; 2022. All rights reserved.</h6>
        <div className="legal__links">
          <h6>Developed By: <br>
          </br> Alejandra Moreno <a href='https://mail.google.com/mail/u/0/#inbox' >aleja_5313@hotmail.com</a>  <br></br> 
           Juan David Castro <a href='https://mail.google.com/mail/u/0/#inbox' >juandavid4130@gmail.com</a></h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer