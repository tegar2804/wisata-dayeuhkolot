import '../styles/Description.css';
import { Container, Breadcrumb } from 'react-bootstrap';

const Description = ({dest}) => {
  return (
    <div id="deskripsi" className="desc-section">
        <Container className="container-sm container-md container-lg">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href={`/dest/${dest.id}`}>{dest.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="desc-container">
                <div className="desc-img">
                    <img src={dest.imageUrl} alt={dest.name} />
                </div>
                <div className="desc-text">
                    <h1>{dest.name}</h1>
                    <h2>{dest.desc}</h2>
                    <p>{dest.address}</p>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Description;