import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavBar extends Component {
  state = { open: false };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    return (
      <Navbar color="primary" dark expand="md" fixed="top">
        <NavbarBrand href="/">Lester</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
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
  }
}

AppNavBar.propTypes = {};

AppNavBar.defaultProps = {};

export default AppNavBar;
