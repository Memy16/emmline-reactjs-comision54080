import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          Emmline
          <img
            className="logoEmmline"
            src="../assets/logoEmmline.jpg"
            alt="Logo de Emmline"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/ropa" as={NavLink}>
            Ropa
          </Nav.Link>
          <Nav.Link to="/category/accesorios" as={NavLink}>
            Accesorios
          </Nav.Link>
          <Nav.Link to="/category/albums" as={NavLink}>
            Albums
          </Nav.Link>
          <Nav.Link to="/category/lightstick" as={NavLink}>
            Lightsticks
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
