import Navbar from '../components/DestNavbar';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Advantages from '../components/Advantages';
import Route from '../components/Route';
import Galery from '../components/Galery';
import NotFound from '../pages/NotFound';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DestinationPage = ({ dests }) => {
  const { id } = useParams();
  const destination = dests.find((d) => d.id === id);

  if (!destination) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{destination.name} - Wisata Dayeuhkolot Sagalaherang</title>
      </Helmet>
      <Navbar />
      <main>
        <Description dest={destination} />
        <Advantages dest={destination} />
        <Route dest={destination} />
        <Galery dest={destination} />
      </main>
      <Footer />
    </>
  );
};

export default DestinationPage;