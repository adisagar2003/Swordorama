import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar';
import { ethers } from "ethers";
import Welcome from './Components/Welcome';
import Product from './Components/Product';
import Swords from '../smart_contract/artifacts/contracts/Swords.sol/Swords.json'


function App() {
  const [count, setCount] = useState(0);
  const [accountName, setaccountName] = useState(null)
 
  return (
    <div className="App">
<Navbar />
 <Welcome />
 <Product />

    </div>
  )
}

export default App
