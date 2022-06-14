import React from 'react'
import swordData from '../JSON/Swords.json'
function ProductsCard() {
//JSON Data for all the props
const Products = (props)=>{
   
        return (
            <div
                        class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg  bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                        <div class="flex flex-row px-2 py-3 mx-3">
    
                            <div class="flex flex-col mt-1 mb-2 ml-4">
                                <div class="text-sm text-gray-600">{props.name}</div>
                                <div class="flex w-full mt-1">
                                  
                                    <div class="text-xs text-gray-600">
                               <button class='text-bold text-red '>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                            <img class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                                src="https://picsum.photos/200" />
    
                        </div>
    
                        <div class="mb-5 border-t border-gray-50">
                            <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Price:<div
                                        class="ml-1 text-gray-500 text-ms"> {props.price}</div>
                                </div>
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Type: <div
                                        class="ml-1 text-gray-500 text-ms"> {props.type}</div>
                                </div>
                                <div class="flex mb-2 mr-4 text-gray-700 ">Power: <div
                                        class="ml-1 text-gray-500 text-ms"> {props.power}</div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>

            
        )
 
}

  return (
  
    
    <div class="grid grid-cols-6 gap-5 p-20 ">
                    {swordData.map((sword)=>{
                            return (<Products name={sword.name} price={sword.price} type={sword.type} power={sword.power} />)
                    })}
                  
    
    
                </div>

  )
}

export default ProductsCard
