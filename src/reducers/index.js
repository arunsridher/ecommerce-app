import { combineReducers } from 'redux';
import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART } from '../actions';

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
    default:
      return state;
  }
}



export default products;
