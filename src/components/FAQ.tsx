import React from 'react';
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations('faq');

  const faqs = [
    {
      question: t('question1'),
      answer: t('answer1'),
    },
    {
      question: t('question2'),
      answer: t('answer2'),
    },
    {
      question: t('question3'),
      answer: t('answer3'),
    },
    {
      question: t('question4'),
      answer: t('answer4'),
    },
    {
      question: t('question5'),
      answer: t('answer5'),
    },
    {
      question: t('question6'),
      answer: t('answer6'),
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">{t('title')}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-base md:text-lg font-semibold text-white">{t('questionPrefix')}: {faq.question}</h3>
            <p className="text-xs md:text-sm text-gray-300">{t('answerPrefix')}: {faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
