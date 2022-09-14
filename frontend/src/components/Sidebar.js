import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen, categories }) => {
  return (
    <div
      className={
        sidebarIsOpen
          ? 'active-nav bg-dark side-navbar d-flex justify-content-between flex-wrap flex-column'
          : 'bg-dark side-navbar d-flex justify-content-between flex-wrap flex-column'
      }
    >
      <Nav className="flex-column text-white w-100 p-2">
        <Nav.Item>
          <strong>Categories</strong>
        </Nav.Item>
        {categories.map((category) => (
          <Nav.Item key={category}>
            <LinkContainer
              to={`/search?category=${category}`}
              onClick={() => setSidebarIsOpen(false)}
            >
              <Nav.Link>{category}</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
