import React, { useContext } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { sumItems } from "./CartReducer";

const Cart = () => {

  const { showCart, cartItems, showHideCart, removeAll } = useContext(CartContext);
  
  return (
    <div>
      {showCart && (
        <div className='cart__wrapper  mt-6'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa1 fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper bg-opacity-70'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem item={item} />
                ))}
                <button className='font-bold mb-2' onClick={() => removeAll()}>
          Remove All
        </button>
                <div className='Cart__cartTotal flex justify-between'>
                  <div className=" font-bold">Cart Total</div>

                  <div className=" font-bold" style={{ marginLeft: 5 }}>
                    {sumItems(cartItems).total}RON
                  </div>
                  
                </div>

                <div><NavLink to='/checkout' className='flex justify-center mr-auto ml-auto bg-red-900 text-yellow-100 rounded' onClick={showHideCart} >Checkout</NavLink></div>
              </ul>
            )}
          </div>


        </div>
      )}
    </div>
  );
};

export default Cart;