import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToList, clearMessageState } from '../actions';
import Swal from 'sweetalert2';

class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: "",
      description: "",
      price: "",
      rating: 0,
      img: ""
    }
  }
  
  handleInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
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

  addProduct = () => {
    if(this.isEmpty(this.state.name)){
      this.showAlert("Please provide the name of the product");
      return;
    }
    if(this.isEmpty(this.state.description)){
      this.showAlert("Please provide the description of the product");
      return;
    }
    if(this.isEmpty(this.state.price) || this.state.price === "0"){
      this.showAlert("Please provide the price of the product");
      return;
    }
    if(this.isEmpty(this.state.img)){
      this.showAlert("Please provide the image URL of the product");
      return;
    }
    let product = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      rating: this.state.rating,
      img: this.state.img
    }
    this.props.dispatch(addProductToList(product));
    if(this.props.state.status === "success"){
      this.resetForm();
    }
    Swal.fire({
      text: "Product added successfully",
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
      toast: true
    });
  }

  resetForm = () => {
    this.setState({
      name: "",
      description: "",
      price: "",
      rating: 0,
      img: ""
    })
  }

  render() {
    return (
      <div>
        <h1 className="page-heading">ADD PRODUCT</h1>
        <form id="add-product-form">
          <div className="input-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" className="custom-input" name="name" onChange={this.handleInput} value={this.state.name} required/>
          </div>
          <div className="input-group">
            <label htmlFor="description">Description *</label>
            <textarea id="description" className="custom-input" name="description" onChange={this.handleInput} value={this.state.description} rows="3" cols="30" required></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="price">Price *</label>
            <input type="number" id="price" className="custom-input" name="price" onChange={this.handleInput} value={this.state.price}  required/>
          </div>
          <div className="input-group">
            <label htmlFor="rating">Rating *</label>
            <input type="range" min="0" max="5" step="0.1" id="rating" className="custom-input" name="rating" onChange={this.handleInput} value={this.state.rating}  required/>
          </div>
          <div className="input-group">
            <label htmlFor="img">URL *</label>
            <input type="url" id="img" className="custom-input" name="img" onChange={this.handleInput} value={this.state.img}  required/>
          </div>
          <div className="input-button-group">
            <button type="button" className="btn-success" onClick={this.addProduct}>Add Product</button>
            <button type="button" className="btn-danger">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    state
  }
}
export default connect(mapStateToProps)(CreateProduct);