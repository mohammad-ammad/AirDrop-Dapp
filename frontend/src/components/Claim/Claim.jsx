import React, {useState, useEffect} from 'react'
import './Claim.css';
import GIF from "../../assets/nft.gif";
import Logo from "../../assets/logo.png";
import axios from "axios";
import {ethers, providers} from "ethers";
import airDrop from "../../utils/airDrop.json";
import { toast } from 'react-toastify';


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
const dic_net = {
    name: 'matic',
    chainId: 137,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/aebf61d6db3f4288bd0090f6432a5700')
};
const Claim = () => {
    const [vouchar, setVouchar] = useState("");
    const [message, setMessage] = useState("");
    const [transMsg, setTransMsg] = useState("");
    const [isId, setIsId] = useState(false);
    const [isMessage,setIsMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isContract, setIsContract] = useState([]);
    useEffect(()=>{
      const loadContract = async () => 
      {
          if(window.ethereum)
          {
              const provider = new ethers.providers.Web3Provider(window.ethereum);

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
  
            //   const signer = provider.getSigner();

            const signer = new ethers.Wallet(
                "9ed8d0a48fdc4adfd526b37b212a5e182e8fe23323a1759a76e3f81f46fa3afe",
                ethers.getDefaultProvider(dic_net)
             );

              const contract = new ethers.Contract("0x499A47413874A82FFF0581bb9732e66403985061", airDrop, signer);

              setIsContract(contract);

              console.log(contract)
            
           

          }
          else 
          {
              alert("Need to install MetaMask");
          }
      }

      loadContract();
  },[])
  const submitHandler = async (e) => 
    {
        e.preventDefault();
        
        if(window.ethereum)
        {
            setLoading(true);
            await window.ethereum.request({ method: "eth_requestAccounts" });
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
            const account = provider.getSigner();
            const Address = await account.getAddress();
            

            let meta_mask_account = Address;
            
            const {data} = await axios.post("/api/v1/user",{vouchar,meta_mask_account},{
                headers:{
                    "Content-Type":"application/json"
                }
            })

            

            if(data.status === true) 
            {
                let iscount = await isContract.count();
                let count = parseInt(iscount, 16);

                if(count <= 1000)
                {
                    const res = await isContract.airDrop([Address],[count]);

                    res.wait();

                    console.log(res);

                    setIsId(true)
                    setTransMsg(res.hash);
                }
            }


            setLoading(false);

            if(data)
            {
                setIsMessage(true);
                setMessage(data.message);
                setVouchar("");
            }
        }
        else 
        {
            alert("Install MetaMask!!")
        }
    }
  return (
    <>
    <div className="claim__wrapper">
        <div className="left">
          <img src={GIF} alt="" srcset="" />
        </div>
        <div className="right">
          <img src={Logo} alt="" />
          <form onSubmit={submitHandler}>
            <div>
            {
                isMessage ? <p className='message'>{message}</p> : ''
            }
            {
                isId ? <p className='message'>Confirmation Transaction ID: {transMsg.slice(0,6)}...{transMsg.slice(59)}</p> : ''
            }
            <input type="text" name="" id="" placeholder='Dein NFT-Gutschein Code*'  value={vouchar} onChange={(e)=>setVouchar(e.target.value)}/>
            </div>
            <div>
            {
                    loading ? 
                    <button type="button">
                        <div className="spinner-border spinner-border-sm" role="status">
                             <span className="visually-hidden">Loading...</span>
                        </div>
                    </button>
                    :
                    <button type="submit">NFT anfordern</button>
                }
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default Claim