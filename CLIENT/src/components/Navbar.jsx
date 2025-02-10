import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Under_armour_logo.svg"
            alt="Master Street"
            height="30"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">New</Nav.Link>
            <Nav.Link href="/">Freestylers</Nav.Link>
            <Nav.Link href="/">Batallas</Nav.Link>
            <Nav.Link href="/">Redes Sociales</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link>
          </Nav>

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
