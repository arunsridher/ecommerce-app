import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { addProductToCart } from '../actions';

class ProductCard extends Component {

  addProductToCart = () =>{
    const { product } = this.props;
    this.props.dispatch(addProductToCart(product.id));
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-description">
          <h3>{product.name}</h3>
          <p className="rating-container"><span className="rating">{product.rating}</span><FontAwesomeIcon className="star-icon" icon={faStar} /></p>
          <p>{product.description}</p>
        </div>
        <div className="product-options">
          <div className="price">&#8377; {product.price}</div>
          <button type="button" onClick={this.addProductToCart} className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;