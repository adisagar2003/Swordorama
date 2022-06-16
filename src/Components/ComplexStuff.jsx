import React, { useState } from 'react'
import {ethers} from 'ethers';
import Swords from '../artifacts/contracts/Swords.sol/Swords.json';



function ComplexStuff() {
    const contractAddress ='0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();
    const contract = new ethers.contract(contractAddress,Swords.abi,signer);
    

    const [balance,setBalance] = useState();
    const getBalance = async ()=>{
        const [account] = await window.ethereum.request({method:'eth_requestAccounts'});
        const [provider] = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance))
    }
    getBalance()
  return (
    <div>
      {balance}
    </div>
  )
}

export default ComplexStuff
