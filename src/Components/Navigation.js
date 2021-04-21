import { Nav, Navbar, Button, Form } from "react-bootstrap";
const NavBar = () => {
  return (
    <div className="container">
      <Navbar expand="lg" className ="navStyle" >
        <Navbar>
          <Navbar.Brand href="#home">
            <img
              src="https://res.cloudinary.com/lawlah/image/upload/v1618401517/logo.svg"
              className="d-inline-block align-top logo"
              alt="shortly"
            />
          </Navbar.Brand>
        </Navbar>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navLinkStyle">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#link">Prices</Nav.Link>
            <Nav.Link href="#link">Resources</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>{" "}
          &nbsp; &nbsp;
          <Form inline>
            <Button className="signUpButton">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
