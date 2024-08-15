import React from 'react';
import './HomeSection.css'; // Make sure to import the CSS file

import {useTranslations} from 'next-intl';


const HomeSection = () => {
  const t = useTranslations('homeSection');

  return (
    <section className="md:pt-20 pt-16 gradient-background">
      <div className="flex md:mb-2 md:pt-2 items-center justify-center">
        <p className="md:text-3xl text-xl text-white font-bold">{t('welcome')}</p>
      </div>
      <div className="flex md:pt-2 justify-center">
        <p className="text-white text-xs md:text-sm pb-2 md:mx-16 lg:mx-32 text-center">
          {t('description')}
        </p>
      </div>
      {/* <div className="flex justify-center">
        <Image src={welcomeImage} alt={t('welcomeAlt')} className='curved-bottom full-width'/>
      </div> */}
    </section>
  );
};

export default HomeSection;