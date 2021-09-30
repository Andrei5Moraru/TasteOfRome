import React, { useContext } from "react";
import CartContext from "./cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./cart/CartItem";
import { sumItems } from "./cart/CartReducer";

const Checkout = () => {

  const { cartItems } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };

  return (
    <div className="mb-96 mt-36 ml-44 mr-44 rounded ">
      <div className='  bg-white bg-opacity-70 flex justify-between'>

        <ul className="ml-16 mt-16">
          {cartItems.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </ul>
        <div className='Cart__cartTotal flex justify-between font-bold mt-48 text-4xl'>
          <div>Cart Total</div>

          <div style={{ marginLeft: 5 }}>
            {sumItems(cartItems).total}€
          </div>
        </div>

        <div className="">
          <div class=" p-16 bg-gray-800 rounded overflow-visible"> <span class="text-xl font-medium text-gray-100 block pb-3">Card Details</span>
            <div class="overflow-visible flex justify-between items-center mt-2">


            </div>
            <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Name on Card</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Full Name" /> </div>
            <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Card Number</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="**** **** **** ****" /> </div>
            <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
              <div class="col-span-2 "> <label class="text-xs text-gray-400">Expiration Date</label>
                <div class="grid grid-cols-2 gap-2"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm" /> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy" /> </div>
              </div>
              <div class=""> <label class="text-xs text-gray-400">CVV</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX" /> </div>
            </div> <button class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Pay</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Checkout;