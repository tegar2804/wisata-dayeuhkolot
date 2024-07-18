import '../styles/Galery.css';
import { Container } from 'react-bootstrap';

const Galery = ({dest}) => {
  return (
    <div id="galeri" className="galery-section">
        <Container className="container-sm container-md container-lg">
            <div className="galery-title">
                <h2>Galery</h2>
            </div>
            <div className="galery-list">
                <div className="left">
                    <div className="galery-card">
                        <img src={dest.galeries[0]} alt="galery" />
                    </div>
                </div>
                <div className="right">
                    {dest.galeries.map((galery, index) => {
                        if(index > 0 && index < 5) {
                            return (
                                <div key={index} className="galery-card">
                                    <img src={galery} alt="galery" />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Galery;