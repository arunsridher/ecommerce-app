import { combineReducers } from 'redux';
import { ADD_PRODUCTS } from '../actions';

const initialProductState = {
  productsList: []
}

export function products(state = initialProductState, action){
  switch(action.type){
    case ADD_PRODUCTS:
      return {
        ...state,
        productsList: action.products
      };
    default:
      return state;
  }
}

export default combineReducers({
  products
})
