import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";
import MS from "../assets/MS.jpg";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo + Título */}
        <Navbar.Brand href="/">
          <img src={MS} alt="Master Street Logo" className="navbar-logo" />
          <span className="navbar-title">Master Street</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menú Central */}
          <Nav className="mx-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/">Freestylers</Nav.Link>
            <Nav.Link href="/">Batallas</Nav.Link>
            <Nav.Link href="/">Redes Sociales</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link>
          </Nav>

          {/* Iconos de Búsqueda y Cuenta */}
          <Nav>
            <Nav.Link href="/">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="/">
              <FaShoppingCart />
            </Nav.Link>
            <Nav.Link href="/">
              <FaUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
