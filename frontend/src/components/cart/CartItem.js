import React, { useContext } from "react";
import CartContext from "./CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem, increaseItem, decreaseItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "RON" };
  return (

      <div className='CartItem__item text-black p-10 flex justify-between '  >
        <img src={item.image} alt='' className="rounded-full mr-16" width="100"  />
        <div className="mt-5 font-bold ">
          {item.name} {formatCurrency(`${item.price}`, opts)}
        </div>
        <div className="custom-number-input h-10 w-32 mt-3 ml-8">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button className=" bg-red-900 text-white hover:bg-red-800 h-full w-20 rounded-l cursor-pointer outline-none" onClick={() => decreaseItem(item)}>
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="text" className="outline-none focus:outline-none text-center w-full bg-red-900 font-semibold text-md  md:text-basecursor-default flex items-center text-white  outline-none" value={item.quantity} readOnly></input>
            <button className="bg-red-900 text-white hover:bg-red-800 h-full w-20 rounded-r cursor-pointer" onClick={() => increaseItem(item)}>
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <button className='CartItem__button ml-10' onClick={() => removeItem(item.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>

  );
};

export default CartItem;