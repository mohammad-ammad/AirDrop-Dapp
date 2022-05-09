import React, {useState, useEffect} from 'react'
import './Claim.css';
import GIF from "../../assets/nft.gif";
import Logo from "../../assets/logo.PNG";
import axios from "axios";
import {ethers} from "ethers";
import airDrop from "../../utils/airDrop.json";


const Claim = () => {
    const [vouchar, setVouchar] = useState("");
    const [message, setMessage] = useState("");
    const [isMessage,setIsMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isContract, setIsContract] = useState([]);
    useEffect(()=>{
      const loadContract = async () => 
      {
          if(window.ethereum)
          {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
  
              const signer = provider.getSigner();

              const contract = new ethers.Contract("0xeb862cA92bd3067bA466a02C8a39f8d1F92E9745", airDrop, signer);

              setIsContract(contract);

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

                await isContract.airDrop([Address],[count]);

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
            <input type="text" name="" id="" placeholder='Vouchar *'  value={vouchar} onChange={(e)=>setVouchar(e.target.value)}/>
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
                    <button type="submit">Claim Your NFT</button>
                }
            </div>
          </form>
        </div>
    </div>
  )
}

export default Claim