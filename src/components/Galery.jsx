import '../styles/Galery.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';

const Galery = ({dest}) => {
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleShow = (image) => {
        setCurrentImage(image);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
    <div id="galeri" className="galery-section">
        <Container className="container-sm container-md container-lg">
            <div className="galery-title">
                <h2>Galery</h2>
            </div>
            <div className="galery-list-container">
                <div className="galery-list">
                    <div className="left">
                        <div className="galery-card">
                            <img src={dest.galeries[0]} alt="galery" onClick={() => handleShow(dest.galeries[0])}/>
                        </div>
                    </div>
                    <div className="right">
                        {dest.galeries.map((galery, index) => {
                            if(index > 0 && index < 5) {
                                return (
                                    <div key={index} className="galery-card">
                                        <img src={galery} alt="galery" onClick={() => handleShow(galery)}/>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </Container>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
                <img src={currentImage} alt="Full Screen" style={{ width: '100%', height: 'auto' }} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
};

export default Galery;