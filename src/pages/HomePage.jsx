import Navbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Destinations from '../components/Destinations';

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Banner />
      <Destinations />
    </main>
    <Footer />
  </>
);

export default HomePage;