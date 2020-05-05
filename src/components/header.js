
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'

const BeerList = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Bubble 'n' Salt</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link className = 'header-link' to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className = 'header-link'to="/Beer-Look-Up">Beer</Link>
            </NavItem>
            <NavItem>
              <Link className = 'header-link' to="/Cocktail-Recipes">Cocktail Recipes</Link>
            </NavItem>
            <NavItem>
              <Link className = 'header-link' to="/recipes">Recipes</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BeerList;