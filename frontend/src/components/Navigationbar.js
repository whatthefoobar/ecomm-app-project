import './Navigationbar.css';

import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import Button from 'react-bootstrap/esm/Button';
import SearchBox from './SearchBox';

const Navigationbar = ({
  cart,
  userInfo,
  signoutHandler,
  setSidebarIsOpen,
  sidebarIsOpen,
}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Button variant="dark" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <i className="fas fa-bars"></i>
        </Button> */}
        <LinkContainer to="/">
          <Navbar.Brand className="nav__logo">Siren</Navbar.Brand>
        </LinkContainer>
        <SearchBox />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  w-100  justify-content-end">
            <Link to="/cart" className="nav-link">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
