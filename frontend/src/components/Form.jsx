import React, {useState, useEffect} from 'react'
import './Form.css';
import axios from "axios";
import Alert from './Alert';
import {ethers} from "ethers";
import airDrop from "../utils/airDrop.json";

const Form = () => {
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
  return (
    <>
    <div className="form__wrapper">
        <div>
            <p>Trusted and Secure</p>
             <p>NFT AIR-DROP</p>
             <button className='get_start_btn'>Get Started</button>
        </div>
        <form className='form__container' onSubmit={submitHandler}>
        {
            isMessage ? <Alert message={message}/> : ''
        }
            <div className="mb-3">
                <label className="form-label"></label>
                <input type="text" className="form-control" placeholder='Vouchar *' value={vouchar} onChange={(e)=>setVouchar(e.target.value)}/>
            </div>
            <div className="d-grid gap-2">
                {
                    loading ? 
                    <button type="button" className="btn btn-primary">
                        <div className="spinner-border text-light spinner-border-sm" role="status">
                             <span className="visually-hidden">Loading...</span>
                        </div>
                    </button>
                    :
                    <button type="submit" className="btn btn-primary">Claim Your NFT</button>
                }
            </div>
        </form>
    </div>
    </>
  )
}

export default Form