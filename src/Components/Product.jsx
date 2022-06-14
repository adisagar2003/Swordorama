import React from 'react'

const swords=[{
    "name":"Z-Nemesis",
    "type":"Dark",
    "price":1,
    "power":0.3

},
{
    "name":"A-Archelis",
    "type":"Orion",
    "price":0.4,
    "power":0.44
    
},
{
    "name":"M-Zeus",
    "type":"Lightning",
    "price":1,
    "power":0.9
    
}
,{
    "name":"A-Azrael",
    "type":"Dark/Light",
    "price":10,
    "power":0.89
    
}
,{
    "name":"T-Tyrant",
    "type":"Bio",
    "price":1.2,
    "power":4
    
}]
function Product() {

    function SwordCard(props){
        return(
        <div class='w-[40vh] h-[30vh]  overflow-hidden border-rounded'>
            <div class='text-xl text-slate-900'>{props.name}</div>
            <div class='text-2xl text-purple-500'>{props.price}</div>
            <div class='text-2xl text-red-500'>{props.power}</div>
            <div class='text-2xl text-slate-500'>{props.type}</div>
            <button class='p-10 hover:bg-red-500'>Buy now</button>

        </div>)}
    
  return (

    <div class='sm:flex  p-10 gap-10'>
        {swords.map((items)=>{
            return(
            <SwordCard name={items.name} price={items.price} power={items.power} type={items.type} />)
        })}
    </div>
  )

  }
export default Product
