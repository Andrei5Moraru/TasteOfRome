import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INCREASE, DECREASE } from "./Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: []
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const decreaseItem = (item) => {
    dispatch({ type: DECREASE, payload: item });
  };
  const increaseItem = (item) => {
    dispatch({ type: INCREASE, payload: item });
    
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        decreaseItem,
        increaseItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;