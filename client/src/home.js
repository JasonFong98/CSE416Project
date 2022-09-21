import React from "react";
import { Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid style={{paddingLeft: "2%"}}>
          <Navbar.Brand href="/"><h1 style={{fontSize:20}}>Home</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
