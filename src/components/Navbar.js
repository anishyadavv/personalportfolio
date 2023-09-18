import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";

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
          <img src={logo} alt="logo" width={100} />
          ANISH KUMAR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="#Home"
              className="me-5"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="./#About"
              className="me-5"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="#Project"
              className="me-5"
            >
              PROJECT
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: "700" }}
              href="#Contact"
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
