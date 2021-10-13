import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INCREASE, DECREASE,REMOVE_ALL } from "./Types";


const storeCartItems = (cartItems)=>{
  const cart = cartItems.length > 0 ? cartItems: [];
  localStorage.setItem('cart', JSON.stringify(cart));
}


export const sumItems = cartItems =>{
  storeCartItems(cartItems);
  return {
    itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    total: cartItems.reduce((total,item) => total + (item.price * item.quantity),0)
  }
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: 
      return {
        ...state,
        showCart: !state.showCart,
      };
    case ADD_TO_CART: 
      if(!state.cartItems.find(item => item.id === action.payload.id)){
        state.cartItems.push({
          ...action.payload,
          quantity:1,
        })
      }
      return {
        ...state,
        cartItems:[...state.cartItems],
        ...sumItems(state.cartItems)
      }
       
    case REMOVE_ALL:
      state.cartItems=[]
      return {
        ...state,
        ...sumItems(state.cartItems)
      };

    case REMOVE_ITEM: 
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      console.log(newCartItems);
      return {
        ...state,
        cartItems: [...newCartItems],
        ...sumItems(state.cartItems)
      };
    
    case INCREASE: 
      const increase = state.cartItems.findIndex(
      item => item.id === action.payload.id
      );
      state.cartItems[increase].quantity++;
      return {
        ...state,
        cartItems:[...state.cartItems],
        ...sumItems(state.cartItems)
      }  
    
    case DECREASE: 
      const decrease = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      
      const product = state.cartItems[decrease];
      if(product.quantity > 1){
       product.quantity--;
      } 
      // if(product.quantity = 0){
      //   REMOVE_ITEM;
      // }
      return {
        ...state,
        cartItems:[...state.cartItems],
        ...sumItems(state.cartItems)
      }  
    
    // case DECREASE: {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (state.cartItems[itemIndex].cartQuantity > 1) {
    //     state.cartItems[itemIndex].cartQuantity -= 1;
    //   } else if (state.cartItems[itemIndex].cartQuantity === 1) {
    //     const nextCartItems = state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );

    //     state.cartItems = nextCartItems;
    //   }
    // }
    default:
      return state;
  }
};

export default CartReducer;