import React from 'react';
import CloseButton from '@/components/CloseButton';

const TermsAndConditionsPage = () => {
  return (
    <section className="relative text-justify p-8 px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Terms and Conditions</h2>
      <p className="text-sm text-gray-500">Last updated on Jul 31 2024</p>

      <p className="mt-4 text-lg">
        For the purpose of these Terms and Conditions, the terms "we", "us", "our" used anywhere on this page shall mean RIDO SP SERVICES PRIVATE LIMITED, whose registered/operational office is Patuaha, Ward no 21, Near Ramjanki Thakurbari, Saharsa Saharsa BIHAR 852202. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
      </p>

      <p className="mt-4 text-lg">
        Your use of the website and/or purchase from us are governed by the following Terms and Conditions:
      </p>

      <h3 className="text-2xl font-semibold mt-6">Content Changes</h3>
      <p className="mt-2 text-lg">
        The content of the pages of this website is subject to change without notice.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Accuracy and Liability</h3>
      <p className="mt-2 text-lg">
        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
      </p>
      <p className="mt-2 text-lg">
        Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through our website and/or product pages meet your specific requirements.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Intellectual Property</h3>
      <p className="mt-2 text-lg">
        Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
      </p>
      <p className="mt-2 text-lg">
        All trademarks reproduced on our website which are not the property of, or licensed to, the operator are acknowledged on the website.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Unauthorized Use</h3>
      <p className="mt-2 text-lg">
        Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
      </p>

      <h3 className="text-2xl font-semibold mt-6">External Links</h3>
      <p className="mt-2 text-lg">
        From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.
      </p>
      <p className="mt-2 text-lg">
        You may not create a link to our website from another website or document without RIDO SP SERVICES PRIVATE LIMITED’s prior written consent.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Governing Law</h3>
      <p className="mt-2 text-lg">
        Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Transaction Liability</h3>
      <p className="mt-2 text-lg">
        We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
      </p>
    </section>
  );
};

export default TermsAndConditionsPage;
