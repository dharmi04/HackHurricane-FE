// SubscriptionCards.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionCards = () => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    // Load Stripe.js when the component mounts
    const loadStripe = async () => {
      const stripeScript = document.createElement('script');
      stripeScript.src = 'https://js.stripe.com/v3/';
      stripeScript.async = true;
      stripeScript.onload = () => {
        setStripe(window.Stripe('your_stripe_public_key'));
      };
      document.head.appendChild(stripeScript);
    };

    loadStripe();

    // Clean up the script tag when the component unmounts
    return () => {
      const stripeScript = document.querySelector('script[src="https://js.stripe.com/v3/"]');
      if (stripeScript) {
        stripeScript.remove();
      }
    };
  }, []);

  const handleSubscription = async (subscriptionInterval) => {
    try {
      if (!stripe) {
        console.error('Stripe.js is not loaded.');
        return;
      }

      // Assuming you have the Stripe.js library loaded
      // Create a PaymentMethod using Stripe.js
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
      });

      // Make a request to your backend to create a customer and subscription
      const response = await axios.post('/api/create-customer', {
        email: 'example@example.com', // Replace with user's email
        payment_method_token: paymentMethod.id,
        subscription_interval: subscriptionInterval,
      });

      // Retrieve client_secret from the backend for confirming the SetupIntent
      const { client_secret } = await axios.post('/api/setup-intent', {
        customer_id: response.data.customer.id,
      });

      // Confirm the SetupIntent using Stripe.js
      const { setupIntent, error } = await stripe.confirmCardSetup(client_secret, {
        payment_method: paymentMethod.id,
      });

      if (error) {
        console.error('Error confirming SetupIntent:', error);
        // Handle error accordingly
      } else {
        // Handle successful confirmation
        console.log('SetupIntent confirmed:', setupIntent);
        // Redirect to a success page or handle success message
      }
    } catch (error) {
      console.error('Error handling subscription:', error);
      // Handle error accordingly
    }
  };

  const subscriptionPlans = [
    {
      title: 'Monthly Subscription',
      price: '$9.99',
      interval: 'monthly',
    },
    {
      title: 'Three-Monthly Subscription',
      price: '$24.99',
      interval: 'three-monthly',
    },
    {
      title: 'Six-Monthly Subscription',
      price: '$49.99',
      interval: 'six-monthly',
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-8">
        {subscriptionPlans.map((plan, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-gray-600 mb-2">{plan.price} {plan.interval}</p>
            <button
              onClick={() => handleSubscription(plan.interval)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCards;
