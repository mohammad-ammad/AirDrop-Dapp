import React from 'react'
import AboutImg from "../../assets/about.PNG";
import PaperSvg from "../../assets/notes.png";

import './About.css';

const About = () => {
  return (
    <div className="about__wrapper" id="about_section">
        <div className="left">
            <div>
                <img src={AboutImg} alt="" />
            </div>
            <div>
                <p>
                Pull statt Push, Community statt Abo, digital statt stationär lautet der Leitsatz des Münchner
                Startups. Das Team um Gründer-Duo André Moll und Tobias Neuburger betreibt mit Utry.me
                den weltweit ersten und einzigen Online-Probiermarkt ohne Preise.
                </p>
                <p>
                Im Mai 2018 an den
                Start gegangen, ist Utry.me das aktuell wachstumsstärkste Sampling Start-Up in Europa.
                Das mittlerweile 40-köpfige Team hat es sich zur Mission gemacht, bis 2025 die größte
                europäische FMCG-Sampling-Plattform zu werden und dabei als Game Changer der
                Branche zu agieren.
                </p>
            </div>
        </div>
        <div className="right">
            <img src={PaperSvg} alt="" />
            
        </div>
    </div>
  )
}

export default About