import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar';
import { ethers } from "ethers";
import Welcome from './Components/Welcome';
import Product from './Components/Product';
function App() {
  const [count, setCount] = useState(0);
  const [accountName, setaccountName] = useState(null)
  const [balance, setBalance] = useState(null);

  //Connecting web3 wallet to the wallet 


  const getBalance = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    const accName = await provider.getBalance(account);
    setaccountName(accName)
    setBalance(ethers.utils.formatEther(balance))
  }


  return (
    <div className="App">
<Navbar />
 <Welcome />
 <Product />
    </div>
  )
}

export default App
