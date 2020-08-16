import React, { Component } from 'react';
import { Header, Home, CreateProduct, ManageProducts, Cart, Page404 } from './index';
import { getProducts } from '../actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(getProducts());
  }

  render(){
    const cartSize = this.props.cart.length;
    return (
      <Router>
        <div>
          <Header cartSize={cartSize} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={CreateProduct} />
              <Route path="/edit" component={ManageProducts} />
              <Route path="/cart" component={Cart} />
              <Route component={Page404} />
            </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(store){
  return store;
}
export default connect(mapStateToProps)(App);
