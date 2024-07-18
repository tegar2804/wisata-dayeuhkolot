import { Container } from 'react-bootstrap'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container className="container-sm container-md container-lg">
                <div className="footer-container">
                    <img src="/Assets/IMG/light-logo.png" alt="wisata-dayeuhkolot" />
                    <div className="social-media">
                        <div className="social-media-title">
                            <h6>Hubungi Kami</h6>
                        </div>
                        <div className="contact">
                            <a href=""><i className="fa fa-instagram"></i></a>
                            <a href=""><i className="fa fa-facebook-square"></i></a>
                            <a href=""><i className="fa fa-envelope"></i></a>
                            <a href=""><i className="fa fa-envelope"></i></a>
                        </div>
                    </div>    
                </div>
                <div className="copyright">
                    <p>Copyright <i className='fa fa-copyright'></i> 2024 All Rights Reserved</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;