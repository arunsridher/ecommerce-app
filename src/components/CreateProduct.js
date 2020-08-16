import React, { Component } from 'react';

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

  handleInput = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1 className="page-heading">ADD PRODUCT</h1>
        <form id="add-product-form">
          <div className="input-group">
            <label for="name">Name *</label>
            <input type="text" id="name" className="custom-input" name="name" onChange={this.handleInput} value={this.state.name} />
          </div>
          <div className="input-group">
            <label for="description">Description *</label>
            <textarea id="description" className="custom-input" name="description" onChange={this.handleInput} value={this.state.description} rows="3" cols="30"></textarea>
          </div>
          <div className="input-group">
            <label for="price">Price *</label>
            <input type="number" id="price" className="custom-input" name="price" onChange={this.handleInput} value={this.state.price} />
          </div>
          <div className="input-group">
            <label for="rating">Rating *</label>
            <input type="range" min="0" max="5" step="0.1" id="rating" className="custom-input" name="rating" onChange={this.handleInput} value={this.state.rating} />
          </div>
          <div className="input-group">
            <label for="img">URL *</label>
            <input type="url" id="img" className="custom-input" name="img" onChange={this.handleInput} value={this.state.img} />
          </div>
          <div className="input-button-group">
            <button type="button" className="btn-success">Add Product</button>
            <button type="button" className="btn-danger">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProduct;