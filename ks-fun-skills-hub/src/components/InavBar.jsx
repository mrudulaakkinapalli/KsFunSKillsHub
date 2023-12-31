import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import logo from "../assets/ks logo.jpeg";
import '../App.css';

function InavBar() {
  const openGoogleForm = () => {
    const googleFormLink = "https://forms.gle/GnHzGKgwuDR8DiFCA";
    window.open(googleFormLink, '_blank');
  };

  return (
    <>
      <Navbar fixed="top" expand="md" className='navBg' data-bs-theme="dark">
        <Container className='textStyle'>
          <Navbar.Brand href="#Home" className='textStyle'>
            <img className="logo" src={logo} alt="logo"/>
            KS Fun Skills Hub
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow:"0.5"}}>
            <Nav className="me-auto justify-content-center">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Courses">Courses</Nav.Link>
              <Nav.Link href="#contactUs">Contact Us</Nav.Link>
              <Nav.Link onClick={openGoogleForm}>Careers</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#JoinUs"><Button className='btn btn-light nav-button'>Join Now</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

export default InavBar;
