import Image from 'next/image';
import mainImage from '../assets/main.png';
import heroImage from '../assets/Hero.png';

const WelcomeSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen gradient-container flex flex-col rounded-lg">
      {/* Combined First and Third Containers */}
      <div className="flex w-full items-start">
        <div className="flex flex-col items-start w-2/3">
          <Image
            src={mainImage}
            alt="Cars on road"
          />
          <p className="text-2xl font-bold text-black text-center">
            Book your ride now for a seamless, comfortable, and reliable travel experience
          </p>
        </div>

        {/* Combined Second and Fourth Containers */}
        <div className="flex flex-col items-center w-1/3 space-y-8">
          <p className="text-xl font-semibold text-black text-center">
            Start Journey with us....<br />And enjoy the ride!
          </p>
          <Image
            src={heroImage}
            alt="Character"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
