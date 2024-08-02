import CloseButton from '@/components/CloseButton';
import React from 'react';

const AboutUsPage = () => (
  <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">About Us</h2>
    <h3 className="mt-4 text-2xl font-semibold">Welcome to Rido</h3>
    <p className="mt-2">
      We believe that every journey should be a pleasant and memorable experience. Established in 2024, our mission has been to provide safe, reliable, and comfortable transportation solutions for our valued customers. We understand the importance of punctuality, convenience, and professionalism, which is why we go above and beyond to exceed your expectations.
    </p>
    
    <h3 className="mt-4 text-2xl font-semibold">Our Story</h3>
    <p className="mt-2">
      Rido was founded by Mr. Satyam Krishna with a vision to revolutionize the transportation industry. With years of experience and a passion for customer service, Satyam Krishna set out to create a cab rental service that offers more than just a ride. From humble beginnings, we have grown into a trusted name in the industry, known for our dedication to quality and excellence.
    </p>
    
    <h3 className="mt-4 text-2xl font-semibold">Our Fleet</h3>
    <p className="mt-2">
      Our diverse fleet of vehicles caters to all your transportation needs. Whether you&apos;re looking for a luxury sedan for a business trip, a spacious SUV for a family outing, or a convenient minivan for group travel, we have the perfect vehicle for you. Each vehicle is meticulously maintained to ensure a smooth and comfortable ride.
    </p>
    
    <h3 className="mt-4 text-2xl font-semibold">Our Team</h3>
    <p className="mt-2">
      Our team of professional drivers is the backbone of our service. Carefully selected for their experience, knowledge, and courteous demeanor, they are dedicated to providing you with a safe and enjoyable journey. Our support staff is always ready to assist you with any inquiries or special requests, ensuring a seamless experience from booking to drop-off.
    </p>
    
    <h3 className="mt-4 text-2xl font-semibold">Our Commitment</h3>
    <p className="mt-2">
      At Rido, we are committed to continuous improvement. We regularly seek feedback from our customers and use it to enhance our services. Our goal is to be your trusted transportation partner, delivering exceptional service every time you choose us.
    </p>
  </section>
);

export default AboutUsPage;
