import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigationbar = ({ cart, userInfo, signoutHandler }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="nav-bar">
        <LinkContainer to="/">
          <Navbar.Brand>Siren</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <Link to="/cart" className="nav-link ">
            Cart
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item>User Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/orderhistory">
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <Link
                className="dropdown-item"
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
