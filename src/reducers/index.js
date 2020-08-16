import { combineReducers } from 'redux';
import { ADD_PRODUCTS } from '../actions';

const initialProductState = {
  list: []
}

export function products(state = initialProductState, action){
  switch(action.type){
    case ADD_PRODUCTS:
      return {
        ...state,
        list: action.products
      };
    default:
      return state;
  }
}

export default combineReducers({
  products
})
