import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "./Logo.svg";

export default function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Brand>
        <img src={Logo} alt="company brand logo" className="company-logo"/>
        <span className="coming-soon">... Coming Soon</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <h5 className="contact-main-nav">Contact: team@unwildplanet.com</h5>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
