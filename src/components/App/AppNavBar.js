import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/suites" className="nav-link" activeClassName="active">
              Suites
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/definitions" className="nav-link" activeClassName="active">
              Definitions
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

AppNavBar.propTypes = {};

AppNavBar.defaultProps = {};

export default AppNavBar;
