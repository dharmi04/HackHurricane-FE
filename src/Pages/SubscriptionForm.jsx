import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [cardElement, setCardElement] = useState(null);
  const [subscriptionInterval, setSubscriptionInterval] = useState('monthly');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize Stripe.js with your test publishable key
    const stripe = window.Stripe('pk_test_51OU6UoSJvPaeOTQvAhVwRkhIcCGGZJuxUntzvOryGZpR0abWVc8u40jU9iNYaza9R6Qd8eZAnt4RLv3banucaslf00wS16v6C2');

    // Create an instance of Elements
    const elements = stripe.elements();

    // Create a Card Element
    const card = elements.create('card');

    // Mount the Card Element to the div with id="card-element"
    card.mount('#card-element');

    // Set the Card Element state
    setCardElement(card);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create a paymentMethod using the test Card Element
      const { paymentMethod } = await window.Stripe('your-test-publishable-key').createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      const response = await axios.post('/api/create-customer', {
        email,
        payment_method_token: paymentMethod.id,
        subscription_interval: subscriptionInterval,
      });

      // Handle successful response, e.g., redirect or display success message
      console.log(response.data);
    } catch (error) {
      console.error('Error creating subscription:', error.response?.data || error.message);
      setError('An error occurred while creating the subscription.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Subscription Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Subscription Interval:
          <select value={subscriptionInterval} onChange={(e) => setSubscriptionInterval(e.target.value)}>
            <option value="monthly">Monthly</option>
            <option value="three-monthly">Three Monthly</option>
            <option value="six-monthly">Six Monthly</option>
          </select>
        </label>
        <br />
        <label>
          Card Details:
          <div id="card-element" />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          Subscribe (Test)
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SubscriptionForm;