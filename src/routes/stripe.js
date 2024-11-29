const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Route to create a customer
router.post('/create-customer', async (req, res) => {
  try {
    const { email } = req.body;
    const customer = await stripe.customers.create({ email });
    res.status(200).json({ customerId: customer.id });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Route to create a subscription
router.post('/create-subscription', async (req, res) => {
  try {
    const { customerId, priceId } = req.body;

    // Create a subscription for the customer with the selected Price ID
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    res.status(200).json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
