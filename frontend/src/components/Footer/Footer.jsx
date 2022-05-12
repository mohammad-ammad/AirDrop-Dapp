import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer__wrapper">
        <div>
            <Link to='/'>
            <img src={Logo} alt="" />
            </Link>
        </div>
        <div>
            <div>
                <a href="https://shop.utryme.com/agb" target='_blank'>AGB</a>
            </div>
            <div>
                <a href="https://shop.utryme.com/datenschutz" target='_blank'>Datenschutz</a>
            </div>
            <div>
                <a href="https://shop.utryme.com/impressum" target='_blank'>Impressum</a>
            </div>
        </div>
    </div>
  )
}

export default Footer