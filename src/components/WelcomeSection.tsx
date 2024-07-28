import Image from 'next/image';
import driver from '../assets/driver.png';
import heroImage from '../assets/Hero.png';
import carImage from '../assets/car.png';

const WelcomeSection: React.FC = () => {
  return (
    <div className="relative curved-bottom w-full h-screen gradient-container flex flex-col">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${driver.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      ></div>
      
      <div className="absolute text-black top-0 left-0 w-full flex flex-col items-center justify-center mt-12 z-10">
        <h1 className="text-6xl font-bold">Across all the cities</h1>
        <p className="text-xl mt-2">Travel Anywhere in Bihar Now...</p>
      </div>
      
      <div className="absolute bottom-0 right-0 m-4 z-10">
        <Image
          src={heroImage}
          alt="Character"
          width={500} // Set desired width
          height={500} // Set desired height
        />
      </div>
      
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <Image
          src={carImage}
          alt="Car"
          width={400} // Set desired width
          height={400} // Set desired height
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
