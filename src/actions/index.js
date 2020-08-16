// action types
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST";


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