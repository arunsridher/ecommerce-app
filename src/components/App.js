import React, { Component } from 'react';
import { Header, Home, CreateProduct, ManageProducts, Cart, Page404 } from './index';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getProducts } from '../actions';

class App extends Component {
  
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(getProducts());
    console.log('STATE ', store.getState());
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

export default App;
