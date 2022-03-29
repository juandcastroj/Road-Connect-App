import React from 'react'
import { Footer, FooterSocial, Icon} from '../styles/styles'

const PageFooter = () => {
  return (
    <Footer>
        <img src='https://i.ibb.co/Gpbfykx/cicla.png' alt='' width="130px"/>
        <div>
            
        </div>
        <div>
            <div>
                <img  src="{phoneIcon}" alt="" />
                <p>+57-300-794-8872</p>
                </div>
                <div>
                <p>+57-320-484-6725</p>
            </div>
            <div>
                <img src="{emailIcon} "alt=''/>
                <p>bike@roadconnect.com</p>
            </div>
        </div>
        <div>
            <a href='#root'>About us</a>
           
        </div>
        <div>
            <a href='#root'>Contact us</a>
       
        </div>
        <div>
      </div>
      <FooterSocial>
        <Icon className="fab fa-facebook-f socials__icon"></Icon>
        <Icon className="fab fa-twitter socials__icon"></Icon>
        <Icon className="fab fa-instagram socials__icon"></Icon>
               
      </FooterSocial>
    
    </Footer>
  )
}

export default PageFooter