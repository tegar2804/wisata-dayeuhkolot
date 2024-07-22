import '../styles/Banner.css';
import backgroundImage from '/Assets/IMG/curug.jpg';
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <section id="banner" className="banner-section">
      <Container className="container-sm container-md container-lg">
        <div className="contents">
          <div className="banner-title">
            <h1>&quot;BERBUDI&quot;</h1>
            <h1>Desa Wisata</h1>
            <h1>Desa Mandiri</h1>
          </div>
        </div>
      </Container>
      <div className="banner-background-container">
        <img src={backgroundImage} alt="Background" className="banner-background" />
      </div>
    </section>
  );
};

export default Banner;