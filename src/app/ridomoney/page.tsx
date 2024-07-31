import React from 'react';
import CloseButton from '@/components/CloseButton';

const RidoMoneyPage = () => {
  return (
    <section className="relative text-justify p-8 px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Rido Money</h2>

      <p className="mt-4 text-lg">
        <strong>RidoMoney: Your Digital Wallet for All Transactions</strong>
      </p>
      <p className="mt-2 text-lg">
        RidoMoney is a secure and user-friendly digital wallet integrated into our platform, allowing you to manage all your financial transactions effortlessly. Whether you are a cab owner, driver, or a passenger, RidoMoney simplifies the process of handling payments, ensuring quick, cashless transactions. Here’s how RidoMoney can benefit you:
      </p>
      <ul className="mt-2 text-lg list-disc list-inside">
        <li><strong>Instant Payments:</strong> Receive payments for rides and parcel deliveries directly into your RidoMoney account, ensuring immediate access to your earnings.</li>
        <li><strong>Seamless Transfers:</strong> Easily transfer money from your RidoMoney account to your bank account or use it for various in-app purchases and services.</li>
        <li><strong>Secure Transactions:</strong> Our platform employs advanced security measures to protect your financial information and transactions.</li>
        <li><strong>Convenience:</strong> Manage your earnings and expenses in one place, making it easy to track your income and spending.</li>
      </ul>

      <p className="mt-4 text-lg">
        <strong>RidoCoin: Rewarding Your Loyalty</strong>
      </p>
      <p className="mt-2 text-lg">
        RidoCoin is our exclusive digital currency, designed to reward our loyal users and encourage engagement with our platform. Earn RidoCoins through various activities and redeem them for exciting benefits:
      </p>
      <ul className="mt-2 text-lg list-disc list-inside">
        <li><strong>Earn While You Drive:</strong> Cab owners and drivers can earn RidoCoins for completing rides and parcel deliveries, offering an additional incentive to provide excellent service.</li>
        <li><strong>Customer Rewards:</strong> Passengers and parcel senders can earn RidoCoins for frequent use of our services, referrals, and participating in promotions.</li>
        <li><strong>Redeem for Discounts:</strong> Use your accumulated RidoCoins to enjoy discounts on rides, deliveries, and other Rido services, maximizing your savings.</li>
        <li><strong>Exclusive Offers:</strong> Access special deals and offers available only to RidoCoin holders, enhancing your overall experience with our platform.</li>
      </ul>

      <p className="mt-4 text-lg">
        <strong>Why Choose RidoMoney and RidoCoin?</strong>
      </p>
      <p className="mt-2 text-lg">
        By incorporating RidoMoney and RidoCoin into your daily transactions, you can enjoy a more efficient, rewarding, and secure experience. These financial services are designed to foster a sense of community and loyalty, ensuring that every interaction with Rido is beneficial and satisfying.
      </p>
    </section>
  );
};

export default RidoMoneyPage;
