import React from 'react';
import CloseButton from '@/components/CloseButton';

const CancellationAndRefundPolicyPage = () => {
  return (
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Cancellation and Refund Policy</h2>
      <p className="text-sm text-gray-500">Last updated on Jul 31 2024</p>

      <p className="mt-4 text-lg">
        RIDO SP SERVICES PRIVATE LIMITED believes in helping its customers as far as possible and has therefore adopted a liberal cancellation policy. Under this policy:
      </p>

      <h3 className="text-2xl font-semibold mt-6">Cancellation Requests</h3>
      <p className="mt-2 text-lg">
        Cancellations will be considered only if the request is made within 2 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
      </p>
      <p className="mt-2 text-lg">
        RIDO SP SERVICES PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refund/replacement can be made if the customer establishes that the quality of the product delivered is not good.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Damaged or Defective Items</h3>
      <p className="mt-2 text-lg">
        In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at their own end. This should be reported within 2 days of receipt of the products.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Product Expectations</h3>
      <p className="mt-2 text-lg">
        In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 2 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Warranty Issues</h3>
      <p className="mt-2 text-lg">
        In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Refund Processing</h3>
      <p className="mt-2 text-lg">
        In case of any refunds approved by RIDO SP SERVICES PRIVATE LIMITED, it will take 6-8 days for the refund to be processed to the end customer.
      </p>
    </section>
  );
};

export default CancellationAndRefundPolicyPage;
