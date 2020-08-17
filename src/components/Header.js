import React, { Component } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    const { cartSize } = this.props;
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Navbar.Brand><NavLink to="/" style={{textDecoration: 'none', color: '#aaa'}}>eCommerce</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><NavLink exact to="/" style={{textDecoration: 'none', color: '#aaa'}} activeStyle={{color: '#fff'}}>Home</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/add" style={{textDecoration: 'none', color: '#aaa'}} activeStyle={{color: '#fff'}}>Add Product</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/edit" style={{textDecoration: 'none', color: '#aaa'}} activeStyle={{color: '#fff'}}>Manage Products</NavLink></Nav.Link>
            </Nav>
            <Form inline>
              <Button variant="outline-info" onClick={() => window.location.href="cart"}>
              <FontAwesomeIcon icon={faCartPlus} /> <sup className="cart-size">{cartSize !== 0 ? cartSize : ''}</sup>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;