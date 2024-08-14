'use client';
import React, { useState } from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';


const RidoParcelPage: React.FC = () => {
  const t = useTranslations('ridoParcel');

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
    const response = await fetch('https://gbby8996ja.execute-api.ap-south-1.amazonaws.com/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, page: 'RidoParcelPage' })
    });

    if (response.ok) {
      alert(t('emailSuccess'));
      setFormData({
        fullName: '',
        address: '',
        mobile: '',
        email: ''
      });
    } else {
      alert(t('emailFailure'));
    }
  };

  return (
    <div>
    <Navbar />
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>

      <p className="mt-4 text-lg">
        {t('intro1')}
      </p>

      <p className="mt-4 text-lg">
        {t('intro2')}
      </p>

      <h3 className="mt-8 mb-4 text-center text-2xl font-bold">{t('contactTitle')}</h3>

      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            {t('fullName')}
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
            {t('address')}
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
            {t('mobile')}
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
            {t('email')}
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
            {t('submitButton')}
          </button>
        </div>
      </form>
    </section>
    <Footer />
    </div>
  );
};

export default RidoParcelPage;
