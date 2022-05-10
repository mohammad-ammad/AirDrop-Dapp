import React from 'react'
import Cards from '../Cards/Cards';
import './Hero.css';
import { Link } from 'react-router-dom';
import FiveImg from "../../assets/5.png";
import sixImg from "../../assets/6.png";
import sevenImg from "../../assets/7.png";
import eightImg from "../../assets/8.png";

const Hero = () => {
  return (
    <div className="Hero__wrapper">
        <div className="top">
            <h1>Hol dir deinen Honigdachs-NFT von UTRY.ME</h1>
        </div>
        <div className="mid">
            <Cards img={FiveImg} tag="#654"/>
            <Cards img={sixImg} tag="#655"/>
            <Cards img={sevenImg} tag="#656"/>
            <Cards img={eightImg} tag="#657"/>
        </div>
        <div className="bottom">
            <Link to='/claim-nft'>
              <button type='button'>NFT anfordern</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero