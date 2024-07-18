import '../styles/NotFound.css';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
      <div className="notfound-section">
        <h2 className='bg-text top'>ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR</h2>
        <Container className="container-sm container-md container-lg">
          <div className="notfound-container">
            <h1>404</h1>
            <h2>Halaman tidak ditemukan, King!</h2>
            <div className="button-container">
              <div className="home-button">
                <a href="/">
                  <p>kembali ke home</p>
                </a>
              </div>
            </div>
          </div>
        </Container>
        <h2 className='bg-text bottom'>ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR</h2>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;