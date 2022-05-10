import React from 'react'
import Cards from '../Cards/Cards';
import './Values.css';
import OneImg from "../../assets/1.PNG";
import TwoImg from "../../assets/2.PNG";
import ThreeImg from "../../assets/3.PNG";
import FourImg from "../../assets/4.PNG";
const Values = () => {
  return (
    <div className="value__wrapper">
        <h3>Values</h3>
        <p>
        Du bist Teil des exklusiven Honigdachs-VIP-Club und wirst auf LinkedIN oder per Mail
        regelmäßig mit den heißesten News rund um Utry.me und die Honigdachs-NFT-Kollektion
        informiert.
        </p>
        <p>
        Du erhältst als Teil der Honigdachs-Gang einen bevorzugten Zugang zum Utry.me
        Marktforschungs- und Marketingtool – und das schon in der Beta-Phase.
        </p>

        <div className="value__container">
            <Cards img={OneImg} tag="#567"/>
            <Cards img={TwoImg} tag="#562"/>
            <Cards img={ThreeImg} tag="#563"/>
            <Cards img={FourImg} tag="#569"/>
        </div>

        <p>
        Jeder Erstbesitzer eines der vier seltensten Honigdachs-NFTs Supermann-Honigdachs,
        Batman-Honigdachs, Diamant-Honigdachs oder Gold-Honigdachs erhält einen Jahresvorrat
        Utry.me-Boxen gratis!
        (Bilder der seltenen Honigdachse)
        </p>
        <p>
        Bei Utry.me gibt es regelmäßig attraktive Gewinnspiele nur für Honigdachs-NFT-Inhaber.
        </p>
    </div>
  )
}

export default Values