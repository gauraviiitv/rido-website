import React from 'react';
import CloseButton from '@/components/CloseButton';

const PrivacyPolicyPage = () => {
  return (
    <section className="relative text-justify p-8 px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Privacy Policy</h2>
      <p className="text-sm text-gray-500">Last updated on Jul 31 2024</p>
      <p className="mt-4 text-lg">
        This privacy policy sets out how RIDO SP SERVICES PRIVATE LIMITED uses and protects any information that you give RIDO SP SERVICES PRIVATE LIMITED when you visit their website and/or agree to purchase from them.
      </p>
      <p className="mt-4 text-lg">
        RIDO SP SERVICES PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
      </p>
      <p className="mt-4 text-lg">
        RIDO SP SERVICES PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
      </p>

      <h3 className="text-2xl font-semibold mt-6">We may collect the following information:</h3>
      <ul className="list-disc list-inside mt-2 text-lg">
        <li>Name</li>
        <li>Contact information including email address</li>
        <li>Demographic information such as postcode, preferences, and interests, if required</li>
        <li>Other information relevant to customer surveys and/or offers</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">What we do with the information we gather</h3>
      <p className="mt-2 text-lg">
        We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
      </p>
      <ul className="list-disc list-inside mt-2 text-lg">
        <li>Internal record keeping.</li>
        <li>We may use the information to improve our products and services.</li>
        <li>
          We may periodically send promotional emails about new products, special offers, or other information which we think you may find interesting using the email address which you have provided.
        </li>
        <li>
          From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax, or mail. We may use the information to customize the website according to your interests.
        </li>
      </ul>

      <p className="mt-4 text-lg">
        We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in suitable measures.
      </p>

      <h3 className="text-2xl font-semibold mt-6">How we use cookies</h3>
      <p className="mt-2 text-lg">
        A cookie is a small file which asks permission to be placed on your computer&apos;s hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.
      </p>
      <p className="mt-2 text-lg">
        We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
      </p>
      <p className="mt-2 text-lg">
        Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
      </p>
      <p className="mt-2 text-lg">
        You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Controlling your personal information</h3>
      <p className="mt-2 text-lg">
        You may choose to restrict the collection or use of your personal information in the following ways:
      </p>
      <ul className="list-disc list-inside mt-2 text-lg">
        <li>
          Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.
        </li>
        <li>
          If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at{' '}
          <a href="mailto:ridospcabs@gmail.com" className="text-blue-500">ridospcabs@gmail.com</a>.
        </li>
      </ul>
      <p className="mt-2 text-lg">
        We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
      </p>
      <p className="mt-2 text-lg">
        If you believe that any information we are holding on you is incorrect or incomplete, please write to Patuaha, Ward no 21, Near Ramjanki Thakurbari, Saharsa Saharsa BIHAR 852202 or contact us at 7070703855 or{' '}
        <a href="mailto:ridospcabs@gmail.com" className="text-blue-500">ridospcabs@gmail.com</a> as soon as possible. We will promptly correct any information found to be incorrect.
      </p>
    </section>
  );
};

export default PrivacyPolicyPage;