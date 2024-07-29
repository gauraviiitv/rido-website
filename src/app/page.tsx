import HomeSection from '../components/Home/HomeSection';
import WhyChooseUs from '../components/WhyChooseUs';
import RidoForEveryone from '../components/RidoForEveryone';
import JourneyBanner from '../components/JourneyBanner';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div>
      <HomeSection />
      <WhyChooseUs />
      <RidoForEveryone />
      <JourneyBanner />
      <FAQ />
    </div>
  );
};

export default Home;
