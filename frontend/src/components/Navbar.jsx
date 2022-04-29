import React, {useState} from 'react'

const Navbar = () => {
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
    <div className='navbar__wrapper'>
        <div>
            NFT AIRDROP
        </div>
        <div>
            {
              account != "" ? <p className='account'>{account.slice(0,6)}...{account.slice(39)}</p> : 
              <button type='button' onClick={connectMetaMask}>Connect Wallet</button>
            }
        </div>
    </div>
  )
}

export default Navbar