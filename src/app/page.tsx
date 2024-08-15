import HomeSection from '../components/Home/HomeSection';
import BookingSection from '../components/BookingSection';
import WhyChooseUs from '../components/WhyChooseUs';
import RidoForEveryone from '../components/RidoForEveryone';
import FAQ from '../components/FAQ';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';


const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <BookingSection />
      <WhyChooseUs />
      <RidoForEveryone />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
