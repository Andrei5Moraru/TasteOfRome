import React ,{ useContext } from "react";
import CartContext from "./CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };

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
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
        
            _____________________________________________________________________________
          <div className='Cart__cartTotal flex justify-between'>
            <div>Cart Total</div>
            
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts
              )}
            </div>
          </div>
        
          <div><NavLink to='/checkout' className='flex justify-center mr-auto ml-auto bg-red-900 text-yellow-100 rounded'>Checkout</NavLink></div>
        </div>
      )}
    </div>
  );
};

export default Cart;