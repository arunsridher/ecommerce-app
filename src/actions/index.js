// action types
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CLEAR_MESSAGE_STATE = "CLEAR_MESSAGE_STATE";

// action creators
export function getProducts(){
  const url= "http://localhost:3004/products/";
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(products => {
        console.log(products);
        dispatch(addProducts(products));
      })
  }
}

export function addProducts(products){
  return{
    type: ADD_PRODUCTS,
    products
  }
}

export function addProductToList(product){
  return (dispatch) => {
    const url = "http://localhost:3004/products";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      dispatch(addProductToStore(response));
    })
  }
}

export function addProductToStore(product){
  return {
    type: ADD_PRODUCT_TO_LIST,
    product
  }
}

export function addProductToCart(productId){
  return{
    type: ADD_PRODUCT_TO_CART,
    productId
  }
}

export function removeProductFromCart(productId){
  return{
    type: REMOVE_PRODUCT_FROM_CART,
    productId
  }
}

export function updateProduct(id, product){
  return (dispatch) => {
    const url = `http://localhost:3004/products/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      updateProductInStore(response);
    })
  }
}

export function updateProductInStore(product){
  return{
    type: UPDATE_PRODUCT,
    product
  }
}

export function deleteProduct(id){
  return (dispatch) => {
    const url = `http://localhost:3004/products/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(response => {
      dispatch(deleteProductFromStore(id));
    })
  }
}

export function deleteProductFromStore(productId){
  return{
    type: DELETE_PRODUCT,
    productId
  }
}
export function clearMessageState(){
  return{
    type: CLEAR_MESSAGE_STATE,
    status: '',
    message: ''
  }
}