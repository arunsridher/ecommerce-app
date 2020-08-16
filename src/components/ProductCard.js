import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ProductCard extends Component {
  render() {
    const { product, dispatch } = this.props;
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
          <button type="button" className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;