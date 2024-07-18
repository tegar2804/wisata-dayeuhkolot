import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expanded && !event.target.closest('.navbar-collapse')) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  return (
    <Navbar expand="lg" fixed="top" className='navbar' expanded={expanded} onToggle={handleToggle}>
      <Container className="container-sm container-md container-lg">
        <Navbar.Brand href="/"><img src="/Assets/IMG/dark-logo.png" alt="wisata-dayeuhkolot" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto option">
              {['deskripsi', 'kelebihan', 'rute', 'galeri'].map(section => (
                <Nav.Link 
                  key={section}
                  href={`#${section.replace(/\s/g, '').toLowerCase()}`} 
                  className="nav-item"
                >
                  <p>{section}</p>
                </Nav.Link>
              ))}
              <Nav.Link 
                  key='Kembali'
                  href='#'
                  className="nav-item back-button"
                >
                  <p>kembali<i className="fa fa-external-link"></i></p>
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
