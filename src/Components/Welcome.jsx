import React from 'react'
import './Welcome.css'
import {useMoralis} from 'react-moralis';
import {useEffect} from 'react'
function Welcome() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout,login } = useMoralis();
 



  

  return (
    <div class='w-full mt-[10vh] bottom-1 border-1 p-[4vh] sm:p-[10vh]  h-[100vh]'>

      <div style={{fontFamily:'sans-serif',fontWeight:'bold',letterSpacing:1,fontSize:50,marginTop:40,backgroundClip:'content'}} className='Welcome__title'  >
Swordorama
      </div>
     <div class='sm:float-right mt-[15vh] sm:mt-1  w-[65vh] h-[40vh] relative bottom-[14vh]  z-[-10]  '><img  src='https://www.pngkey.com/png/full/276-2764939_solar-long-sword-pixel-art.png'></img></div>
     <span class=" text-2xl animate-fade-in-down bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Blockchain sword trading hub
  </span>
  <br></br>
  
  {isAuthenticated ?  
<h1 class='font-extrabold text-transparent text-2xl p-4  border-slate-400 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border-rounded'>Welcome <code>{user.id}</code>  !  </h1> :
   <button  onClick ={login} class='font-extrabold text-transparent text-2xl p-4 border-2 border-slate-400 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border-rounded'>Login</button>}
    </div>
  
  )
}

export default Welcome
