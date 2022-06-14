import React from 'react'
import './Welcome.css'
function Welcome() {
  return (
    <div class='w-full mt-[10vh] bottom-1 border-1 p-[4vh] sm:p-[10vh]  h-[100vh]'>

      <div style={{fontFamily:'sans-serif' ,fontWeight:'bold',letterSpacing:1,fontSize:50,marginTop:40,letterSpacing:5,backgroundClip:'content'}} className='Welcome__title'  >
Swordorama
      </div>
     <div class='sm:float-right mt-[15vh] sm:mt-1  w-[65vh] h-[40vh] relative bottom-[14vh]  z-[-10]  '><img  src='https://www.pngkey.com/png/full/276-2764939_solar-long-sword-pixel-art.png'></img></div>
     <span class=" text-2xl animate-fade-in-down bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Blockchain sword trading hub
  </span>

    </div>
  
  )
}

export default Welcome
