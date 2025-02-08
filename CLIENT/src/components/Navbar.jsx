import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Under_armour_logo.svg"
            alt="Master Street"
            height="30"
          />
        </Navbar.Brand>

        {/* Botón para expandir en móvil */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú de navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">New</Nav.Link>
            <Nav.Link href="/">Freestylers</Nav.Link>
            <Nav.Link href="/">Batallas</Nav.Link>
            <Nav.Link href="/">Redes Sociales</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link>
          </Nav>

          {/* Iconos de usuario */}
          <Nav>
            <Nav.Link href="/">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="/">
              <i className="bi bi-cart"></i>
            </Nav.Link>
            <Nav.Link href="/">
              <i className="bi bi-person"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
