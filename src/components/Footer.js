import React from 'react'
import '../styles/styleFooter.css'

const Footer = () => {

  return (
    <footer className="footer" style={{padding: '3rem'}} >
      <h1 className="footer__logo">Road Connect</h1>
      <address>
        <h5>Bogotá D.C, Colombia</h5>
      </address>
      <div className="legal">
        <h5>&copy; 2022. All rights reserved.</h5>
        {/* <div className="legal__links" >
          <h5>Developed By: <br>
          </br> Alejandra Moreno <a href='mailto:aleja_5313@hotmail.com' >aleja_5313@hotmail.com</a>  <br></br>
            Juan David Castro <a href='mailto:juandavid4130@gmail.com' >juandavid4130@gmail.com</a></h5>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer