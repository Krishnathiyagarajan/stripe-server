const express = require('express');
const stripeRoutes = require('./src/routes/stripe'); // Import Stripe routes

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON requests

// Routes
app.use('/api', stripeRoutes);
app.get('/', (req, res) => {
    res.send('<h1>Stripe is activated</h1>');
  });

module.exports = app;
