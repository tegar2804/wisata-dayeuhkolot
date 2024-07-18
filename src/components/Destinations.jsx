import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import '../styles/Destinations.css';
import { Container } from 'react-bootstrap';
import dests from '../services/Database';

const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        474: {
            items: 3
        },
        768 : {
            items: 4
        }
    }
};

const Destinations = () => {
    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsLaptop(window.innerWidth > 768); // Adjust this value based on your desired breakpoint
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <div id="destinations" className="dest-section">
        <Container className="container-sm container-md container-lg">
            <h2 className="dest-section-title">
              Ayo Jelajahi Pesona <span>Dayeuhkolot</span>
            </h2>
            <div className="dest-list">
                {isLaptop ? (
                    <>
                        {dests.map((dest) => (
                            <div key={dest.id} className="dest-card">
                                <a href={`/dest/${dest.id}`} className='card-link'>
                                    <div className="card-container">
                                        <img src={dest.imageUrl} alt={dest.name} />
                                        <div className="dest-desc">
                                            <h6>{dest.name}</h6>
                                            <p>{dest.address}</p>
                                            <p>{dest.info}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </>
                ) : (
                    <OwlCarousel className='owl-theme' {...options}>
                        {dests.map((dest, index) => (
                            <div key={index} className="dest-card">
                                <a href={`/dest/${dest.id}`} className='card-link'>
                                    <div className="card-container">
                                        <img src={dest.imageUrl} alt={dest.name} />
                                        <div className="dest-desc">
                                            <h6>{dest.name}</h6>
                                            <p>{dest.address}</p>
                                            <p>{dest.info}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </OwlCarousel>
                )}
            </div>
        </Container>
    </div>
    );
};

export default Destinations;