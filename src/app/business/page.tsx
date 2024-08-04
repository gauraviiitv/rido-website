'use client';
import React, { useState } from 'react';
import CloseButton from '@/components/CloseButton';

const RidoBusinessPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Email sent successfully');
      setFormData({
        fullName: '',
        address: '',
        mobile: '',
        email: ''
      });
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Rido Business</h2>
      <p className="mt-4 text-lg">
        Rido Business: Tailored Transportation Solutions for Your Company
      </p>
      <p className="mt-4">
        We are inviting vehicle owners to join our thriving community and unlock new opportunities for profit. By partnering with us, you can maximize the utilization of your vehicle, ensuring it generates consistent income while you focus on delivering excellent service. Our platform offers extensive support, flexible scheduling, and access to a broad customer base, making it easier than ever to grow your business. Join Rido today and take advantage of our innovative technology and dedicated support to boost your earnings and expand your reach.
      </p>
      
      <h3 className="text-xl font-semibold mt-6">Contact us for business enquiries</h3>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Full name
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Address
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Mobile no.
            <input 
              type="text" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Email id
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              required
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default RidoBusinessPage;
