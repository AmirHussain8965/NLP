import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/imgs/logo.svg";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header_section">
      <Navbar variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand to="/"><img src={Logo} alt="" /> NLP-AI</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto gap-4">
              <Nav.Link>Try it</Nav.Link>
              <Nav.Link>Dashboard</Nav.Link>
              <Nav.Link>API</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
            </Nav>
             <div className="header_btns">
                <Link>Get Started</Link>
                <Button>Login</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
