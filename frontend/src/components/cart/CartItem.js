import React, { useState, useEffect ,useContext } from "react";
import axios from 'axios';
import CartContext from "./CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  console.log(item);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div>

    <li className='CartItem__item text-black p-10 flex justify-between '  >
      <img src={item.image} alt='' className="photo" width="100" class="rounded-full mr-16" />
      <div className="mt-7 "> 
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className='CartItem__button ml-16' onClick={() => removeItem(item.id)}>
      <i class="fas fa-trash"></i>
      </button>
    </li>
    
    </div>
  );
};

export default CartItem;