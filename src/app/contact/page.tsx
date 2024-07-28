import CloseButton from '@/components/CloseButton';
import React from 'react';

const ContactUsPage = () => {
  return (
    <section className="p-8 px-32 bg-gradient-to-b from-white to-green-200">
        <CloseButton/>
    <h2 className="mt-8 text-center text-4xl mb-8 font-bold">Contact Us</h2>
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="mt-4 text-lg">
        At Rido, we value your feedback and are here to assist you with any questions or concerns. Whether you need help with a booking, have a suggestion, or require support, our dedicated customer service team is ready to provide you with prompt and professional assistance.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Customer Support</h3>
        <p>For any inquiries or assistance with bookings, please contact our customer support team.</p>
        <p>Phone: 70-70-70-3855</p>
        <p>Email: <a href="mailto:customers@ridocabs.com" className="text-blue-500">customers@ridocabs.com</a></p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Driver Support</h3>
        <p>If you're a driver needing assistance or interested in joining our team, our driver support team is here to help.</p>
        <p>Phone: 70-70-70-3855</p>
        <p>Email: <a href="mailto:drivers@ridocabs.com" className="text-blue-500">drivers@ridocabs.com</a></p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Feedback and Suggestions</h3>
        <p>We love hearing from our customers. If you have any feedback or suggestions on how we can improve our services, please let us know.</p>
        <p>Email: <a href="mailto:feedback@ridocabs.com" className="text-blue-500">feedback@ridocabs.com</a></p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Our Location</h3>
        <p>
          Head Office:<br />
          Patuaha, Saharsa, Near Maruti Suzuki Showroom, Patuaha, Saharsa, Bihar 852202
        </p>
        <p>Phone: 70-70-70-3855</p>
        <p>Email: <a href="mailto:support@ridocabs.com" className="text-blue-500">support@ridocabs.com</a></p>
      </div>
    </section>
  );
};

export default ContactUsPage;
