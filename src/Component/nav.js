import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Navbars  =()=> {
    return <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
          <Button variant="primary">Sign Up</Button>
        </Container>
      </Navbar>
  }
export default Navbars;