import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Navbar.Brand href="/">eCommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="add">Add Product</NavDropdown.Item>
                <NavDropdown.Item href="edit">Manage Products</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button variant="outline-info" onClick={() => window.location.href="cart"}>
              <FontAwesomeIcon icon={faCartPlus} /> 
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;