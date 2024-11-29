// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const stripeRoutes = require('./src/routes/stripe'); // Import Stripe routes

// // Initialize dotenv to load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS for cross-origin requests
// app.use(express.json()); // For parsing JSON requests

// // Routes
// app.use('/api', stripeRoutes); // Prefix all Stripe-related routes with /api
// app.get('/', (req, res) => {
//     res.send('<h1>Stripe is activated</h1>'); // Root route for testing
// });

// // Export the app for use in server.js
// module.exports = app;



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stripeRoutes = require('./src/routes/stripe'); // Import Stripe routes

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON payloads

// Routes
app.use('/api', stripeRoutes); // Prefix Stripe-related routes with /api
app.get('/', (req, res) => {
  res.send('<h1>Stripe is activated</h1>'); // Root route for testing
});

module.exports = app; // Export the app for use in server.js
