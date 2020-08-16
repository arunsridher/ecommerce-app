import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard } from './index';

class Home extends Component {
  
  render() {
    const { productsList } = this.props.products;
    return (
      <div>
        {
          productsList.map((product, index) => (
            <ProductCard
              product={product} 
              key={`product-${index}`}
              dispatch={this.props.dispatch}
            /> 
          ))
        }
      </div>
    );
  }
}

function mapStateToProps({products}){
  return{
    products
  }
}
export default connect(mapStateToProps)(Home);