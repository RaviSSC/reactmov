import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar className="customCard">
      <Container>
        <Navbar.Brand className="navbar-link" href="#home">
          cineplex
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto customCard">
            <Nav.Link className="navbar-link" href="/">
              Movie-List
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/actors">
              Actor-Lists
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
