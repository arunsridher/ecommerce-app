import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductEditCard } from './';

class ManageProducts extends Component {
  render() {
    const productsList = this.props.state.productsList;
    return (
      <div>
        {
          productsList.map((product, index) => (
            <ProductEditCard
              product={product} 
              key={`product-${product.id}-${index}-${product.name}`}
              dispatch={this.props.dispatch}
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
export default connect(mapStateToProps)(ManageProducts);