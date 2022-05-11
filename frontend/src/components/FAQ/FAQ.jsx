import React from 'react'
import FAQS from '../FAQS/FAQS';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq__wrapper">
        <h3>FAQ</h3>
        <div className="faq__container">
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Was ist ein NFT?
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            Ein NFT (Non-Fungible Token) ist ein einzigartiger, nicht-austauschbarer digitaler Token, welcher auf einer Blockchain ausgegeben wird. Der NFT bezieht sich auf einen digitalen Vermögenswert, er authentifiziert dessen rechtmäßigen Besitzer. Dies über die Wallet-Adresse, welcher der NFT zugeordnet wird. NFTs machen digitale Inhalte rar, was Urheberrechte an digitalen Inhalten transformiert.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Wie bekomme ich einen Utry.me Honigdachs-NFT?
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            1. Scanne den QR-Code auf dem gedruckten NFT-Ticket aus der Utry.me-Box, um auf unsere NFT-Webseite zu kommen.<br/>
            2. Klicke auf den Button "NFT claimen".<br/>
            3. Schau dir unser kurzes Erklärungsvideo an oder lies den Text darunter,
            wie du an deinen ersten NFT kommst.<br/>
            4. Gib deinen NFT-Code ein.<br/>
            5. Erhalte deinen ersten NFT.<br/>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Ist es wirklich umsonst?
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            Ja, weder bei der MetaMask-Wallet noch bei der Transaktion des NFT fallen Kosten oder Gebühren an.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingfour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
            Was ist eine MetaMask Wallet?
            </button>
            </h2>
            <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            MetaMask ist eine Krypto-Wallet, die alle Arten von Ethereum-basierten Token unterstützt. MetaMask kann als reguläre Krypto-Wallet dienen, aber ihre wahre Stärke liegt in der nahtlosen Anbindung an Smart Contracts und dezentralisierte Anwendungen.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingfive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
            Muss ich eine Gas Fee bezahlen?
            </button>
            </h2>
            <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            Nein, die Transkationskosten, um den NFT zu bekommen werden komplett von Utry.me übernommen und es ist auch kein Abo enthalten.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingsix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                Wieviele Honigdachse gibt es?
            </button>
            </h2>
            <div id="flush-collapsesix" class="accordion-collapse collapse" aria-labelledby="flush-headingsix" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                Die Honigdachs-Kollektion von Utry.me ist auf 1000 Stück limitiert.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingseven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven" aria-expanded="false" aria-controls="flush-collapseseven">
            Gibt es unterschiedliche Honigdachse?
            </button>
            </h2>
            <div id="flush-collapseseven" class="accordion-collapse collapse" aria-labelledby="flush-headingseven" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            Unter den 1000 Dachsen gibt es vier besondere, die einige Benfits mitbringen: Supermann-Honigdachs, Batman-Honigdachs, Diamant-Honigdachs und Gold-Honigdachs.
            

            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingeight">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeight" aria-expanded="false" aria-controls="flush-collapseeight">
            Wo kann ich mit den NFTs handeln?
            </button>
            </h2>
            <div id="flush-collapseeight" class="accordion-collapse collapse" aria-labelledby="flush-headingeight" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            Der Handel mit den Honigdachs-NFTs findet ausschließlich auf OpenSea statt.
            (Link zur Honigdachs-Kollektion auf OpenSea)

            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FAQ