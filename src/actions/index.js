// action types
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

// action creators
export function getProducts(){
  const url= "http://my-json-server.typicode.com/arunsridher/ecommerce-app/products";
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