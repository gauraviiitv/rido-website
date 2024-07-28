import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What types of cabs do you offer?",
      answer: "We offer a wide range of cabs including economy, standard, premium, and luxury vehicles. We also have options for SUVs and minivans for larger groups or those with extra luggage.",
    },
    {
      question: "Are there any additional fees I should be aware of?",
      answer: "The quoted fare includes all mandatory charges. However, additional fees may apply for extra services such as tolls, parking, waiting time, or special requests. These will be clearly indicated during the booking process.",
    },
    {
      question: "Are your drivers professional and licensed?",
      answer: "Yes, all our drivers are professionally trained, licensed, and background-checked to ensure your safety and comfort.",
    },
    {
      question: "Is there a limit on the amount of luggage I can bring?",
      answer: "The luggage limit depends on the type of cab you choose. Detailed luggage capacity information is provided during the booking process to help you select the right vehicle for your needs.",
    },
    {
      question: "What is your policy on late cancellations or no-shows?",
      answer: "For late cancellations or no-shows, a fee may be charged. The exact fee depends on the timing of the cancellation relative to the scheduled pick-up time. Please refer to our cancellation policy for more details.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a variety of payment methods including major credit cards (Visa, MasterCard, American Express), debit cards, and online payment platforms like PhonePay, Google Pay, Paytm.",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-white">Q: {faq.question}</h3>
            <p className="text-sm text-gray-300">A: {faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
