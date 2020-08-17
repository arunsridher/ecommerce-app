import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard, Cart } from './index';
import { addProductToCart, removeProductFromCart } from '../actions';
import Swal from 'sweetalert2';

class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      sortEnabled: false,
      sortedData: []
    }
  }

  handleClick = (e) => {
    console.log("Home ", e.target.innerHTML);
    const productId = e.target.id;
    console.log(this.props.state);
    if(e.target.innerHTML === "Add to Cart"){
      this.props.dispatch(addProductToCart(productId));
      if(this.props.state.status === 'success'){
        e.target.innerHTML = "Remove from Cart";
        e.target.className = "btn-danger";
      }
      Swal.fire({
        text: this.props.state.message,
        icon: this.props.state.status,
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
        toast: true
      });
    }
    else{
      this.props.dispatch(removeProductFromCart(productId));
      if(this.props.state.status === 'success'){
        e.target.innerHTML = "Add to Cart";
        e.target.className = "btn-success";
      }
      Swal.fire({
        text: this.props.state.message,
        icon: this.props.state.status,
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
        toast: true
      });
    }
  }

  toggleSort = (e) => {
    if(this.state.sortEnabled){
      e.target.className="btn-success";
      e.target.innerHTML="Sort By Price";
      this.setState({
        sortEnabled: false
      })
    }
    else{
      const { productsList } = this.props.state; 
      let data = [...productsList];
      data.sort((a, b) => a.price - b.price);
      e.target.className="btn-danger";
      e.target.innerHTML="Reset";
      this.setState({
        sortEnabled: true,
        sortedData: data
      })
    }
  }

  render() {
    console.log('State ', this.props.state);
    const productsList = this.state.sortEnabled ? this.state.sortedData : this.props.state.productsList;
    const cart = this.props.state.cart;
    // const { productsList } = this.props.state;
    return (
      <div className="products-container">
        <div className="products-list">
          {
            productsList.map((product, index) => (
              <ProductCard
                product={product} 
                key={`product-${index}`}
                dispatch={this.props.dispatch}
                handleClick = {this.handleClick}
                label = {cart.includes(product.id.toString()) ? "Remove from Cart" : "Add to Cart"} 
                className={cart.includes(product.id.toString()) ? "btn-danger" : "btn-success"}
              /> 
            ))
          }
        </div>
        <div className="products-sort">
          <button type="button" className="btn-success" onClick={this.toggleSort}>Sort By Price</button>
        </div>
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