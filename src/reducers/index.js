import { combineReducers } from 'redux';
import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT_TO_LIST, UPDATE_PRODUCT, CLEAR_MESSAGE_STATE, DELETE_PRODUCT } from '../actions';

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
      };
    case UPDATE_PRODUCT:
      const updatedList = state.productsList.map(product => product.id === action.product.id ? action.product : product);
      return {
        ...state,
        productsList: updatedList,
        status: 'success',
        message: 'Product updated successfully'
      }
    case CLEAR_MESSAGE_STATE:
      return{
        ...state,
        status: action.status,
        message: action.message
      };
    case DELETE_PRODUCT:
      const filteredList = state.productsList.filter(product => product.id !== action.productId);
      return{
        ...state,
        productsList: filteredList,
        status: 'success',
        message: 'Product deleted from cart'
      }
    default:
      return state;
  }
}



export default products;
