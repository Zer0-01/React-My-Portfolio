import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Button from "react-bootstrap/esm/Button";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-primary"  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Anas Zulkifli</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
