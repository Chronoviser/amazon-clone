const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JflfJSHbOghTLIygKvhKxtpURXV8e7StdVmLZP4tyJmfgSG8Q8o5hqha22x82voQdnkBIIH7vjhy86PV7Ng6WKJ00MBEKeNkH');

// APP Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment request was received, amount: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// Listener
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-6213a/us-central1/api