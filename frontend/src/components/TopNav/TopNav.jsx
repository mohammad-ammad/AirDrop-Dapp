import React, {useState} from 'react'
import './TopNav.css';
import Logo from '../../assets/logo.PNG';
import { Link } from 'react-router-dom';
import {ethers} from "ethers"
import {IoIosMenu} from "react-icons/io"
import {HiX} from "react-icons/hi"

const networks = {
    polygon: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Polygon Testnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
};

const TopNav = () => {
    const [account,setAccount] = useState("");
    const [toggle, setToggle] = useState(false);

  const connectMetaMask = async() => 
  {
    if(window.ethereum)
    {
        const result = await window.ethereum.request({method:'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        if (provider.network !== "matic") {
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
            {
                ...networks["polygon"],
            },
            ],
        });
        }
        setAccount(result[0]);
    }
    else 
    {
        alert("Need to install MetaMask");
    }
  }
  return (
    <>
    <div className="TopNav__wrapper">
        <div className="left">
            <img src={Logo} alt="" srcset="" />
        </div>
        <div className="mid">
           <div>
               <Link to="/">HOME</Link>
           </div>
           <div>
               <a href="javaScript:void(0)">STEPS</a>
           </div>
           <div>
               <a href="javaScript:void(0)">VALUES</a>
           </div>
           <div>
               <a href="javaScript:void(0)">ABOUT</a>
           </div>
           <div>
               <a href="javaScript:void(0)">FAQ</a>
           </div>
        </div>
        <div className="right">
            {
              account != "" ? <button type='button'>{account.slice(0,6)}...{account.slice(39)}</button> : 
              <button type='button' onClick={connectMetaMask}>Wallet</button>
            }
        </div>
    </div>
    <div className="mob__nav_wrapper">
        <div className="container">
            <div className="left">
                <img src={Logo} alt="" srcset="" />
            </div>
            <div className="right">
                <IoIosMenu onClick={()=>setToggle(true)}/>
            </div>
        </div>
        {
            toggle && <div className={toggle ? 'container__absolute' : ''}>
            <div>
                <HiX onClick={()=>setToggle(false)}/>
            </div>
           <div>
               <Link to="/">HOME</Link>
           </div>
           <div>
               <a href="javaScript:void(0)">STEPS</a>
           </div>
           <div>
               <a href="javaScript:void(0)">VALUES</a>
           </div>
           <div>
               <a href="javaScript:void(0)">ABOUT</a>
           </div>
           <div>
               <a href="javaScript:void(0)">FAQ</a>
           </div>
           <div>
           {
              account != "" ? <button type='button'>{account.slice(0,6)}...{account.slice(39)}</button> : 
              <button type='button' onClick={connectMetaMask}>Wallet</button>
            }
           </div>
        </div>
        }
    </div>
    </>
  )
}

export default TopNav