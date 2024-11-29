

// // Import necessary libraries
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);  // Initialize Stripe with the secret key

// // Initialize dotenv to load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Example of a route to handle other backend logic
// app.get('/', (req, res) => {
//   res.send('Hello, Stripe!');
// });

// // Webhook to handle Stripe events
// app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;  // This will be set in your .env file

//   let event;

//   try {
//     // Verify the webhook signature
//     event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//   } catch (err) {
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle different event types from Stripe
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       const paymentIntent = event.data.object;
//       console.log(`PaymentIntent was successful!`);
//       // Handle successful payment (e.g., update database)
//       break;
//     case 'payment_intent.payment_failed':
//       const paymentFailedIntent = event.data.object;
//       console.log(`PaymentIntent failed: ${paymentFailedIntent.last_payment_error.message}`);
//       // Handle failed payment (e.g., notify user)
//       break;
//     default:
//       console.log(`Unhandled event type: ${event.type}`);
//   }

//   res.json({ received: true });
// });

// // Set port for the backend server to listen
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




// require('dotenv').config();  // Ensure dotenv is loaded to access the .env file

// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);  // Correctly using the API key from .env

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Define your routes here
// app.use('/api', require('./src/routes/stripe'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




require('dotenv').config(); // Ensure dotenv is loaded to access the .env file

const app = require('./app'); // Import the app configuration from app.js

const PORT = process.env.PORT || 5000; // Define the port

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
