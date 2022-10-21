import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Header = ({ handleOpen }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={handleOpen}>
            Add Product
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
