import React from 'react'
import './Steps.css';
import LinkedIn from '../../assets/linkedin.png';
const Steps = () => {
  return (
    <div className="Steps__wrapper">
        <h3>Benotigte Steps</h3>
        <ol>
            <li>
            Auf den Button "NFT claimen" klicken.
            </li>
            <li>
            Unser kurzes Erklärungsvideo ansehen und/oder den Text darunter lesen.
            </li>
            <li>
            MetaMask-Wallet connecten
            <p>
            Gehe auf die metamask,iO kliCke auf Dann "Install Metamask for
            Wenn du ejnen anderen Browser hast, klicke einfach auf das Jeweilige Icon Klicke dich durch die folgenden Fenster.
            Du Wirst gefragt. 0b du bereits eine "Seed-Phrase" hast Die hast du natüriich n-cch nicht — also auf Yes, lets get set up"
            klicken und du erschaffst damit eine neue Wallet inklusive besagter Seed-phrase
            Die Seed-phrase ist die einz/ge Möglichkeit, deine Wallet bej Ver/ust Wiederherzustellen, Also gut aufbewahren!
            auf 
            </p>
            <p>
            "click here to Secret Schreibe dir die unbedingt in
            richtgen Rejhenfolge auf Ansonsten du den Zugang zu demem virtuellen Kanto Bestätige die Worte.
            wenn du dazu aufgefcvdert wirst. Im Anschluss erschemt ein kleines Puzzle-Icon oben rechts in deinem Browser,
            Klicke darauf und pinne das Fuchs-icon an Nun ist MetaMask oben rechts in deinem Browser und du kannst die
            benutzen, um herauszufinden, wie deine Wallet-Adresse ist klicke oben rechts auf das Fuchs-icon von MetaMask, In
            der oberen Zejle unter "Accountl" ist deine Wallet-Adresse. auf der du ETH- und z.B_ Polygon-rokens senden und
            empfangen kannst.
            </p>
            </li>
            <li>
            Den N FT-Code vom gedruckten Ticket eingeben.
            <p>Bitte etwas Geduld. der NFT erscheint automat'sch nach wenigen Minuten m deiner Wallet.</p>
            </li>
        </ol>
        <div>
            <img src={LinkedIn} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Steps