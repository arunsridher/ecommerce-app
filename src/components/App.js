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
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
              <Route 
                exact 
                path="/" 
                render={(props) => {
                  return <Home {...props} />;
                }}
              />
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
