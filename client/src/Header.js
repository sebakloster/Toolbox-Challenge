import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="mt-2">
      <Navbar className="mainNavBar">
        <Navbar.Brand className="navBrand">React Test App</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
