import React, {useState} from 'react'
import './TopNav.css';
import Logo from '../../assets/logo.PNG';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [account,setAccount] = useState("");
  const connectMetaMask = async() => 
  {
    if(window.ethereum)
    {
        const result = await window.ethereum.request({method:'eth_requestAccounts'});
        setAccount(result[0]);
    }
    else 
    {
        alert("Need to install MetaMask");
    }
  }
  return (
    <div className="TopNav__wrapper">
        <div className="left">
            <img src={Logo} alt="" srcset="" />
        </div>
        <div className="mid">
           <div>
               <Link to="/">HOME</Link>
           </div>
           <div>
               <a href="#">STEPS</a>
           </div>
           <div>
               <a href="#">VALUES</a>
           </div>
           <div>
               <a href="#">ABOUT</a>
           </div>
           <div>
               <a href="#">FAQ</a>
           </div>
        </div>
        <div className="right">
            {
              account != "" ? <button type='button'>{account.slice(0,6)}...{account.slice(39)}</button> : 
              <button type='button' onClick={connectMetaMask}>Wallet</button>
            }
        </div>
    </div>
  )
}

export default TopNav