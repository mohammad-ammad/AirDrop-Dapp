import React from 'react'
import Logo from '../../assets/logo.PNG';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer__wrapper">
        <div>
            <img src={Logo} alt="" />
        </div>
        <div>
            <div>
                <a href="#">AGB</a>
            </div>
            <div>
                <a href="#">Datenschutz</a>
            </div>
            <div>
                <a href="#">Impressum</a>
            </div>
        </div>
    </div>
  )
}

export default Footer