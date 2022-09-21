import React from "react";
import { Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><h1 style={{fontSize:30, paddingLeft:"75%"}}>Home</h1></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
