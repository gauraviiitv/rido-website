import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import HomeSection from '../components/Home/HomeSection';
import WelcomeSection from '../components/WelcomeSection';
import WhyChooseUs from '../components/WhyChooseUs';
import RidoForEveryone from '../components/RidoForEveryone';
import JourneyBanner from '../components/JourneyBanner';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <WelcomeSection />
      <WhyChooseUs />
      <RidoForEveryone />
      <JourneyBanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
