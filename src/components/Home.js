import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard } from './index';
import { addProductToCart } from '../actions';
import Swal from 'sweetalert2';

class Home extends Component {
  
  handleClick = (e) => {
    console.log("Home ", e.target.id);
    const productId = e.target.id;
    this.props.dispatch(addProductToCart(productId));
    Swal.fire({
      text: 'Product added to cart',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
      toast: true
    });
  }

  render() {
    console.log('State ', this.props.state)
    const { productsList } = this.props.state;
    return (
      <div>
        {
          productsList.map((product, index) => (
            <ProductCard
              product={product} 
              key={`product-${index}`}
              dispatch={this.props.dispatch}
              handleClick = {this.handleClick}
              label ="Add to Cart"
            /> 
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    state
  }
}
export default connect(mapStateToProps)(Home);