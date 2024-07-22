const ContactUs = () => {
  return (
    <section className="p-8 bg-transparent">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="mt-4 text-lg">
        At Rido, we value your feedback and are here to assist you with any questions or concerns. Whether you need help with a booking, have a suggestion, or require support, our dedicated customer service team is ready to provide you with prompt and professional assistance.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Customer Support</h3>
        <p>For any inquiries or assistance with bookings, please contact our customer support team.</p>
        <p>Phone: 7070703844</p>
        <p>Email: <a href="mailto:cabsrido@gmail.com" className="text-blue-500">cabsrido@gmail.com</a></p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Driver Support</h3>
        <p>If you're a driver needing assistance or interested in joining our team, our driver support team is here to help.</p>
        <p>Email:</p>
        <p>Phone:</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Feedback and Suggestions</h3>
        <p>We love hearing from our customers. If you have any feedback or suggestions on how we can improve our services, please let us know.</p>
        <p>Email:</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Our Location</h3>
        <p>Head Office:</p>
        <p>Phone:</p>
        <p>Email:</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <p>Facebook:</p>
        <p>Twitter:</p>
        <p>Instagram:</p>
        <p>LinkedIn:</p>
      </div>
    </section>
  );
};

export default ContactUs;
