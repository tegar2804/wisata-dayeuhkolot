import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/Navbar.css'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className='navbar'>
      <Container className="container-sm container-md container-lg">
        <Navbar.Brand href="/"><img src="/Assets/IMG/dark-logo.png" alt="wisata-dayeuhkolot" /></Navbar.Brand>
            <Nav className="ms-auto option">
              <Nav.Link 
                  key='Kembali'
                  href='https://sites.google.com/view/dayeuhkolotsagalaherang'
                  className="nav-item back-button home-back-button"
                >
                  <p><span>kembali</span><i className="fa fa-external-link"></i></p>
              </Nav.Link>
            </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;