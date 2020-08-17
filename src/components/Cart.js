import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard } from './index';
import { removeProductFromCart } from '../actions';
import Swal from 'sweetalert2';

class Cart extends Component {
  
  handleClick = (e) => {
    const productId = e.target.id;
    console.log(e.target);
    this.props.dispatch(removeProductFromCart(productId));
    Swal.fire({
      text: 'Product removed from cart',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
      toast: true
    });
  }
  
  render() {
    const { productsList, cart } = this.props.state;
    return (
      <div>
        {
          productsList.map((product, index) => (
            cart.includes(product.id.toString()) ?
              <ProductCard
                product={product} 
                key={`product-${index}`}
                dispatch={this.props.dispatch}
                handleClick = {this.handleClick}
                label="Remove from Cart"
                className="btn-danger"
              /> : null
          ))
        }
      {cart.length === 0 ? <div className="cart-empty">Cart is Empty!</div> : null}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    state
  }
}
export default connect(mapStateToProps)(Cart);