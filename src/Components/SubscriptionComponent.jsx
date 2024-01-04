// SubscriptionComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const SubscriptionComponent = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscription = async (priceId) => {
    try {
      setLoading(true);

      // Step 1: Create a PaymentMethod on the client side
      const { paymentMethod } = await createPaymentMethod();

      // Step 2: Create a customer on the server side
      const { customer } = await createCustomer(paymentMethod.id);

      // Step 3: Create a SetupIntent on the server side
      const { client_secret } = await createSetupIntent(customer.id);

      // Step 4: Confirm the SetupIntent on the client side
      await confirmSetupIntent(client_secret);

      // Step 5: Subscribe the customer to a plan on the server side
      const { subscription } = await createSubscription(customer.id, priceId);

      console.log('Subscription successful:', subscription);

    } catch (error) {
      console.error('Subscription failed:', error);
      // Handle errors accordingly
    } finally {
      setLoading(false);
    }
  };

  const createPaymentMethod = async () => {
    const { token } = await stripe.createToken();
    const response = await axios.post('/api/create-payment-method', { token: token.id });
    return response.data;
  };

  const createCustomer = async (paymentMethodId) => {
    const response = await axios.post('/api/create-customer', { payment_method_token: paymentMethodId, email: 'example@example.com', subscription_interval: 'monthly' });
    return response.data;
  };

  const createSetupIntent = async (customerId) => {
    const response = await axios.post('/api/setup-intent', { customer_id: customerId });
    return response.data;
  };

  const confirmSetupIntent = async (clientSecret) => {
    const { setupIntent, error } = await stripe.confirmSetupIntent(clientSecret);
    if (error) {
      console.error('Error confirming SetupIntent:', error);
      throw new Error('Failed to confirm SetupIntent');
    }
    return setupIntent;
  };

  const createSubscription = async (customerId, priceId) => {
    const response = await axios.post('/api/create-subscription', { customer_id: customerId, price_id: priceId });
    return response.data;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        <SubscriptionCard
          title="Monthly Subscription"
          priceId={process.env.REACT_APP_MONTHLY_PRICE_ID}
          loading={loading}
          onSubscribe={handleSubscription}
        />
        <SubscriptionCard
          title="Three-Monthly Subscription"
          priceId={process.env.REACT_APP_THREEMONTHLY_PRICE_ID}
          loading={loading}
          onSubscribe={handleSubscription}
        />
        <SubscriptionCard
          title="Six-Monthly Subscription"
          priceId={process.env.REACT_APP_SIXMONTHLY_PRICE_ID}
          loading={loading}
          onSubscribe={handleSubscription}
        />
      </div>
    </div>
  );
};

const SubscriptionCard = ({ title, priceId, loading, onSubscribe }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <button
        onClick={() => onSubscribe(priceId)}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </div>
  );
};

export default SubscriptionComponent;
