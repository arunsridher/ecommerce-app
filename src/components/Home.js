import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard } from './index';
import { addProductToCart } from '../actions';
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

  toggleSort = (e) => {
    console.log(e.target);
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
    // const { productsList } = this.props.state;
    return (
      <div className="products-container">
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