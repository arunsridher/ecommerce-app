import React from 'react';
import { Header, Home, CreateProduct, ManageProducts, Cart, Page404 } from './index';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/add" component={CreateProduct} />
            <Route path="/edit" component={ManageProducts} />
            <Route path="/cart" component={Cart} />
            <Route component={Page404} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
