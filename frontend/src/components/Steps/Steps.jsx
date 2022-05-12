import React from 'react'
import './Steps.css';
import LinkedIn from '../../assets/linkedin.png';

const Steps = () => {
  return (
    <div className="Steps__wrapper" id="steps_section">
        <h3>Benötigte Steps</h3>
        <ol>
            <li>
            Auf den Button “NFT claimen” klicken.
            </li>
            <li>
            Unser kurzes Erklärungsvideo ansehen und/oder den Text darunter lesen.
            </li>
            <li>
            MetaMask-Wallet connecten:
            <p>
            Gehe auf die Website metamask.io und klicke auf "Download". Dann "Install Metamask for
            Chrome". Wenn du einen anderen Browser hast, klicke einfach auf das jeweilige Icon. Klicke
            dich durch die folgenden Fenster. Du wirst gefragt, ob du bereits eine "Seed-Phrase" hast.
            Die hast du natürlich noch nicht – also auf "Yes, let's get set up" klicken und du erschaffst
            damit eine neue Wallet inklusive besagter Seed-Phrase. Die Seed-Phrase ist die einzige
            Möglichkeit, deine Wallet bei Verlust wiederherzustellen. Also gut aufbewahren! Erstelle ein
            sicheres Passwort. 
            </p>
            <p>
            Klicke auf "click here to reveal secret words", schreibe dir die Worte
            unbedingt in der richtigen Reihenfolge auf. Ansonsten verlierst du den Zugang zu deinem
            virtuellen Konto. Bestätige die Worte, wenn du dazu aufgefordert wirst. Im Anschluss
            erscheint ein kleines Puzzle-Icon oben rechts in deinem Browser. Klicke darauf und pinne
            das Fuchs-Icon an. Nun ist MetaMask oben rechts in deinem Browser und du kannst die
            Wallet benutzen. Um herauszufinden, wie deine Wallet-Adresse ist, klicke oben rechts auf
            das Fuchs-Icon von MetaMask. In der oberen Zeile unter "Account1" ist deine
            Wallet-Adresse, auf der du ETH- und z.B. Polygon-Tokens senden und empfangen kannst.
            </p>
            </li>
            <li>
            Den NFT-Code vom gedruckten Ticket eingeben.
            <p>Bitte etwas Geduld, der NFT erscheint automatisch nach wenigen Minuten in deiner Wallet.
              </p>
            </li>
        </ol>
        <div>
            <a href='https://www.linkedin.com/groups/12660332/' target='_blank'>
            <img src={LinkedIn} alt="" srcset="" />
            </a>
        </div>
    </div>
  )
}

export default Steps