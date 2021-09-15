import React, { useState, useEffect } from 'react';
import items from '../util/data';
import axios from 'axios';
import { useContext } from 'react';
import CartContext from "./cart/CartContext";
import formatCurrency from "format-currency";



const Shopping = (props) => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios("http://localhost:8080/api/v1/menu")
            const data = response.data;
            setMenu(data);
            
        }
        fetchItems()
    },[])
    const itemes = menu;
    const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
   

    return ( 
        
        <div class=" mb-36">


        <div class="py-12">
     
            <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                <div class="md:flex ">
                    <div class="w-full p-4 px-6 py-5 bg-yellow-100 ">
                        <div class="md:grid md:grid-cols-3 gap-2 ">
                            <div class="col-span-3 p-5 ">
                                <h1 class="text-xl font-medium ">Shopping Cart</h1>
                            {itemes.map((data,index)=>{
                                return <div>
                               
                                <div class="flex justify-between items-center mt-6 pt-6 ">
                                    <div class="flex items-center"> <img src={data.image} alt={data.name} className='photo' width="60" class="rounded-full "/>
                                        <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">{data.name}</span> </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="pr-8 flex "> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"  /> <span class="font-semibold">+</span> </div>
                                        <div class="pr-8 "> <span class="text-xs font-medium"> <h5>{formatCurrency(`${data.price}`, opts)}</h5></span> </div>
                                        <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                    </div>
                                </div>
                                </div>
                                 })}
                                {/* <div class="flex justify-between items-center pt-6 mt-6 border-t">
                                    <div class="flex items-center"> <img src="https://i.imgur.com/Uv2Yqzo.jpg" width="60" class="rounded-full "/>
                                        <div class="flex flex-col ml-3 "> <span class="text-md font-medium w-auto">Pasta</span>  </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="pr-8 flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/> <span class="font-semibold">+</span> </div>
                                        <div class="pr-8"> <span class="text-xs font-medium">$10.50</span> </div>
                                        <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                    <div class="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" class="rounded-full "/>
                                        <div class="flex flex-col ml-3 "> <span class="text-md font-medium">Risotto</span>  </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="pr-8 flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/> <span class="font-semibold">+</span> </div>
                                        <div class="pr-8"> <span class="text-xs font-medium">$10.50</span> </div>
                                        <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                    </div>
                                </div> */}
                                <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                    <div class="flex items-center"> <i class="fa fa-arrow-left text-sm pr-2"></i> <a href="/delivery" class="text-md font-medium text-blue-500">Continue Shopping</a> </div>
                                    <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span class="text-lg font-bold text-gray-800 "> $100</span> </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>

    
    );
}

export default Shopping;