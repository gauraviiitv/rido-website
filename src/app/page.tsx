import Navbar from '../components/NavBar';
// import Hero from '../components/Hero';
// import Features from '../components/Features';
// import Services from '../components/Services';
// import Booking from '../components/Booking';
import Footer from '../components/Footer';
import HomeSection from '../components/Home/HomeSection';
import WelcomeSection from '../components/WelcomeSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <WelcomeSection />
      {/* <WhyChooseUs /> */}
      <Footer />
    </div>
  );
};

export default Home;
