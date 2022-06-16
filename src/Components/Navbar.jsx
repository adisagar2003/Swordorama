import React from 'react'
import {BiMenu,BiChevronRightSquare} from 'react-icons/bi'
import { useState } from 'react';
import {useMoralis} from 'react-moralis';
import { ethers } from 'ethers';

function Navbar(props) {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout,login } = useMoralis();
  const [hamburgerOpen,setHamburgerOpen] = useState(false)
  const [balance, setBalance] = useState(null);

  //Connecting web3 wallet to the wallet 


  const getBalance = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    const accName = await provider.getBalance(account);

    setBalance(ethers.utils.formatEther(balance))
  }

  getBalance()
  return (
    <div class='h-3 bg-gray-900 overflow-hidden'>
    

<div class="flex flex-wrap  fixed h-screen h-[14vh] ">
  <section class="relative mx-auto">
    
    <nav class="flex justify-between bg-gray-900 text-white w-[100vh] sm:w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
        
        Swordorama<div class='h-1'> <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba2c2ab-45a5-490c-87e7-aa5f31567b90/d7e3hnh-e20cc5ad-545a-439a-ae1d-136fb8051e98.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTJjMmFiLTQ1YTUtNDkwYy04N2U3LWFhNWYzMTU2N2I5MFwvZDdlM2huaC1lMjBjYzVhZC01NDVhLTQzOWEtYWUxZC0xMzZmYjgwNTFlOTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dCBfePu2kXFTNill2iMhDZAWXCC8s7tF0V1b8Bds7ls' width={30} height={30} class='relative bottom-9 right-6'/></div>
        </a>
      {console.log(balance)}
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a class="hover:text-gray-200" href="#">Home</a></li>
          {user? <a class="hover:text-gray-200" href="#" onClick={logout}>Logout</a>:<a href="#" class='hidden  ' onClick={login}>Sign In </a> }

          <li><a class="hover:text-gray-200" href="#">Collections</a></li>
          {user?<li><a class="hover:text-gray-200" href="#">{balance==null ? 1:balance.slice(0,7)}<span class='text-purple-400'>ETH</span></a></li>:<li>  </li> }
          
        </ul>
      
      
        <div class=" items-center space-x-3 left-10   items-center">
        
        
   
       <button onClick={()=>setHamburgerOpen(!hamburgerOpen)}>
          <a class="flex items-center hover:text-gray-200 relative left-[34vh] sm:left-[0vh] transition-all"  href="#" >
        
              {hamburgerOpen ? <BiChevronRightSquare />:<BiMenu />}
          </a>
          </button>
        </div>
      </div>
  
      
    
    </nav>



    <nav class={hamburgerOpen ? "flex flex-col sm:w-[28vh]  w-[50vh] z-10 h-[100vh]  absolute right-0 h-[100vh] bg-gray-900 text-white w-screen transition-all":"hidden transition-all"} >
<a class='p-3 hover:bg-slate-600 border-b-white cursor-pointer'>Home</a>
<a class='p-3 hover:bg-slate-600 border-b-white cursor-pointer'>Collections</a>
<a class='p-3 hover:bg-slate-600 border-b-white cursor-pointer text-purple-500'>{balance==null ? 1:balance.slice(0,7)}</a>
<a class='p-3 hover:bg-slate-600 border-b-white cursor-pointer'>{account}</a>
    


    </nav>
    
  </section>
</div>


    </div>
  )
}

export default Navbar
