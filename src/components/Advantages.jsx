import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import '../styles/Advantages.css';
import { Container } from 'react-bootstrap';

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

const Advantages = ({dest}) => {
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
    <div id="kelebihan" className="advantages-section">
        <Container className="container-sm container-md container-lg">
            <div className="advantages-title">
                <h2>Kenapa sih Harus ke <span>{dest.name}</span>?</h2>
            </div>
            <div className="advantage-list">
                {isLaptop ? (
                    <>
                        {dest.advantages.map((advantage, index) => (
                            <div key={index} className="advantage-card">
                                <div className="card-container">
                                    <img src={advantage.imageUrl} alt="advantage" />
                                    <div className="advantage-desc">
                                        <h6>{advantage.name}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <OwlCarousel className='owl-theme' {...options}>
                        {dest.advantages.map((advantage, index) => (
                            <div key={index} className="advantage-card">
                                <div className="card-container">
                                    <img src={advantage.imageUrl} alt="advantage" />
                                    <div className="advantage-desc">
                                        <h6>{advantage.name}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                )}
            </div>
        </Container>
        <div className="advantages-background-container">
          <img src={dest.imageUrl} alt="Background" className="advantages-background" />
        </div>
    </div>
    );
};

export default Advantages;