import { combineReducers } from 'redux';
import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../actions';

const initialProductState = {
  productsList: [],
  cart: []
}

export function products(state = initialProductState, action){
  switch(action.type){
    case ADD_PRODUCTS:
      return {
        ...state,
        productsList: action.products
      };
    case ADD_PRODUCT_TO_CART:
      const existsInArray = state.cart.some(productId => productId === action.productId);
      if(existsInArray)
        return state;
      return {
        ...state,
        cart: [action.productId, ...state.cart]
      };
    case REMOVE_PRODUCT_FROM_CART:
      const updatedCart = state.cart.filter(productId => productId !== action.productId);
      console.log("updatedCart ", updatedCart);
      return {
        ...state,
        cart: updatedCart
      }
    default:
      return state;
  }
}



export default products;
