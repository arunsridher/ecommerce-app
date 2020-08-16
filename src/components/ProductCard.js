import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { addProductToCart } from '../actions';

class ProductCard extends Component {
  render() {
    const { product, handleClick, label } = this.props;
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
            <button type="button" id={product.id} onClick={handleClick} className="add-to-cart">{label}</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;