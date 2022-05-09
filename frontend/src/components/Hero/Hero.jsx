import React from 'react'
import Cards from '../Cards/Cards';
import './Hero.css';
import OneImg from "../../assets/1.PNG";
import TwoImg from "../../assets/2.PNG";
import ThreeImg from "../../assets/3.PNG";
import FourImg from "../../assets/4.PNG";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="Hero__wrapper">
        <div className="top">
            <h3>Die Honigdachs-NFT-Kollektion von UTRY.ME</h3>
        </div>
        <div className="mid">
            <Cards img={OneImg} tag="#654"/>
            <Cards img={TwoImg} tag="#655"/>
            <Cards img={ThreeImg} tag="#656"/>
            <Cards img={FourImg} tag="#657"/>
        </div>
        <div className="bottom">
            <Link to='/claim-nft'>
              <button type='button'>NFT Claimen</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero