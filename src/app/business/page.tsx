'use client';
import React, { useState } from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';

const RidoBusinessPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    mobile: '',
    email: ''
  });

  const t = useTranslations('ridoBusiness');

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
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>
      <p className="mt-4 text-lg">
        {t('intro')}
      </p>
      <p className="mt-4">
        {t('description')}
      </p>
      
      <h3 className="text-xl font-semibold mt-6">{t('contactTitle')}</h3>
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
            {t('submit')}
          </button>
        </div>
      </form>
    </section>
  );
};

export default RidoBusinessPage;
