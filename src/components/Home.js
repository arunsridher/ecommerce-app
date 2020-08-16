import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard } from './index';

class Home extends Component {
  
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