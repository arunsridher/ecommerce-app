import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct, deleteProduct } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

class ProductEditCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.product.name,
      description: this.props.product.description,
      rating: this.props.product.rating,
      price: this.props.product.price
    }
  }

  isEmpty = (str) => {
    return str === undefined || str.trim() === '';
  }

  showAlert = (msg) => {
    Swal.fire({
      text: msg,
      icon: 'error',
      showConfirmButton: false,
      timer: 1000,
      position: 'center',
    });
  }

  handleInput = (e) => {
    if(e.target.name === "rating" && (e.target.value < 0 || e.target.value > 5)){
      this.showAlert("Rating cannot be greater than 5");
      e.target.value = this.state.rating;
      return;
    }
    if(e.target.name === "price" && (e.target.value <= 0)){
      this.showAlert("Price cannot be less than 0 or empty");
      e.target.value = this.state.rating;
      return;
    }
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  updateProduct = () => {
    if(this.isEmpty(this.state.name)){
      this.showAlert("Please provide the name of the product");
      return;
    }
    if(this.isEmpty(this.state.description)){
      this.showAlert("Please provide the description of the product");
      return;
    }
    if(this.state.price == "" || this.state.price === "0"){
      this.showAlert("Please provide the price of the product");
      return;
    }
    const id = this.props.product.id;
    const img = this.props.product.img;
    let product = {
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating,
      price: this.state.price,
      img
    }
    this.props.dispatch(updateProduct(id, product));
    Swal.fire({
      text: "Product updated successfully",
      icon: this.props.state.status,
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
      toast: true
    });
  }


  deleteProduct = () => {
    const id = this.props.product.id;
    console.log("id", id);
    this.props.dispatch(deleteProduct(id));
    Swal.fire({
      text: "Product deleted from cart",
      icon: this.props.state.status,
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
      toast: true
    });
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-description">
          <h3>
            <input type="text" name="name" value={this.state.name} onChange={this.handleInput} style={{border: 0}} required />
          </h3>
          <p className="rating-container" style={{width: '50px', height: '25px'}}>
            <span className="rating">
              <input type="number" name="rating" value={this.state.rating} onChange={this.handleInput} min="0" max="5" style={{width: '25px', border: 0, backgroundColor: '#388E3C'}} required/>
            </span>
            <FontAwesomeIcon className="star-icon" icon={faStar} />
          </p>
          <p>
            <textarea className="description" name="description" value={this.state.description} onChange={this.handleInput} rows="3" cols="54" style={{border: 0}} required></textarea>
          </p>
        </div>
        <div className="product-options">
          <div className="price">
            &#8377; <input type="number" name="price" value={this.state.price} onChange={this.handleInput} style={{width: '80px', border: 0}} required/>
          </div>
          <div className="options">
            <div onClick={this.updateProduct} className="options-button"><FontAwesomeIcon className="edit-icon" icon={faEdit} /> Update</div>
            <div onClick={this.deleteProduct} className="options-button"><FontAwesomeIcon className="delete-icon" icon={faTrash} /> Delete</div>
          </div>
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
export default connect(mapStateToProps)(ProductEditCard);