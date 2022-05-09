import React from 'react'
import Cards from '../Cards/Cards';
import './Values.css';
import cardImg from "../../assets/card2.png";
import FiveImg from "../../assets/5.png";
import sixImg from "../../assets/6.png";
import sevenImg from "../../assets/7.png";
import eightImg from "../../assets/8.png";
const Values = () => {
  return (
    <div className="value__wrapper">
        <h3>Values</h3>
        <p>
        Du bist Teil des exklusiven Honigdachs-VlP-Club und wirst auf LinkedIN Oder per Mail
        regelmäßig mit den heißesten News rund urn Utryme und die Honigdachs-NFT-KOIIektion informiert.
        </p>
        <p>
        Du erhältst als Teit der Honigdachs-Gang einen bevorzugten Zugang zum
        l_Jtry.me Marktforschungs- und Marketingtool — und das schon in der Beta-phase.
        </p>

        <div className="value__container">
            <Cards img={FiveImg} tag="#567"/>
            <Cards img={sixImg} tag="#562"/>
            <Cards img={sevenImg} tag="#563"/>
            <Cards img={eightImg} tag="#569"/>
        </div>

        <p>
        Jeder Erstbesitzer eines der Vier seltensten Honigdachs-NFTs
        Super-Honigdachs, Bat-Honigdachs, Diamant-Honigdachs Oder Gold-Honigdachs
        </p>
        <p>
        erhält einen Jahresvorrat Utryme-Boxen gratis!
        Bei utry_me gibt es regelmäßig attraktive Gewinnspiele nur für Honigdachs-NFT-lnhaber
        </p>
    </div>
  )
}

export default Values