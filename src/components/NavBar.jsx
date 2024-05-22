import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoEmmline.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          <img src={logo} alt="Logo de Emmline" width={80} />
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
