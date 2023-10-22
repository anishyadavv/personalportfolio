import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function navbarHome() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary shadow-lg"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "700" }}>
          <img className="logo" src={logo} alt="logo" width={100} />
          ANISH KUMAR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="#home"
              className="me-5"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="#about"
              className="me-5"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="#project"
              className="me-5"
            >
              PROJECT
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="#contact"
              className="me-5"
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbarHome;
