import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <Navbar color="primary" dark expand="md" fixed="top">
      <NavbarBrand href="/">Lester</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/suites" className="nav-link">
              Suites
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/definitions" className="nav-link">
              Definitions
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

AppNavBar.propTypes = {};

AppNavBar.defaultProps = {};

export default AppNavBar;
