import '../styles/Route.css';
import { Container } from 'react-bootstrap';

const Route = ({dest}) => {
  return (
    <div id="rute" className="route-section">
        <Container className="container-sm container-md container-lg">
            <div className="route-container">
                <h2>Rekomendasi Rute</h2>
                <img src={dest.route.imageUrl} alt="peta rute" />
                <div className="button-container">
                    <div className="maps-button">
                        <a href={dest.route.gmaps} target="_blank" rel="noopener noreferrer">
                            <p>lihat selengkapnya <i className="fa fa-angle-right"></i></p>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Route;