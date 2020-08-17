import { combineReducers } from 'redux';
import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT_TO_LIST } from '../actions';

const initialProductState = {
  productsList: [],
  cart: [],
  status: '',
  message: ''
}

export function products(state = initialProductState, action){
  switch(action.type){
    case ADD_PRODUCTS:
      return {
        ...state,
        productsList: action.products,
        status: 'success',
        message: 'Products fetched successfully'
      };
    case ADD_PRODUCT_TO_LIST:
      const productExists = state.cart.some(product => product.id === action.product.id);
      if(productExists){
        return {
          ...state,
          status: 'failure',
          message: 'Product already exists'
        };
      }
      return {
        ...state,
        productsList: [action.product, ...state.productsList],
        status: 'success',
        message: 'Product added successfully'
      }
    case ADD_PRODUCT_TO_CART:
      const existsInArray = state.cart.some(productId => productId === action.productId);
      if(existsInArray)
        return {
          ...state,
          status: 'failure',
          message: 'Product already added to cart'
        };
      return {
        ...state,
        cart: [action.productId, ...state.cart],
        status: 'success',
        message: 'Product added to cart'
      };
    case REMOVE_PRODUCT_FROM_CART:
      const updatedCart = state.cart.filter(productId => productId !== action.productId);
      if(updatedCart.length === state.cart){
        return{
          ...state,
          status: 'failure',
          message: 'Product doesnt exist in the cart'
        }
      }
      return {
        ...state,
        cart: updatedCart,
        status: 'success',
        message: 'Product removed from cart'
      }
    default:
      return state;
  }
}



export default products;
