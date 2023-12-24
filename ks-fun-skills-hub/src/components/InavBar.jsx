import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/ks logo.jpeg";
import '../App.css';
import { Button } from 'react-bootstrap';

function InavBar() {
  const openGoogleForm = () => {
    // Replace "YOUR_FORM_LINK" with the actual link to your Google Form
    const googleFormLink = "https://forms.gle/GnHzGKgwuDR8DiFCA";
    
    // Open the Google Form in a new tab
    window.open(googleFormLink, 'https://forms.gle/GnHzGKgwuDR8DiFCA');
  };  return (
    <>
      <Navbar fixed="top" className='navBg' data-bs-theme="dark">
      
        <Container className='textStyle'>
        <div style={{display:"flex",alignItems:"center"}}>
            <img className="logo" src={logo} alt="logo"/>
          
          <Navbar.Brand href="#Home" className='textStyle'>KS Fun SKills Hub</Navbar.Brand>
          </div>
          <div>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Courses">Courses</Nav.Link>
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
            <Nav.Link  onClick={openGoogleForm}>Careers</Nav.Link>
          </Nav>
          </div>
          <div>
          <Nav.Link href="#JoinUs"><Button className='btn btn-light nav-button'>Join Now</Button></Nav.Link>
          </div>
        </Container>
      </Navbar>
      
    </>
  );
}

export default InavBar;