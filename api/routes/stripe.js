const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  console.log("Received payment request:", req.body);

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.error("Stripe error:", stripeErr);
        res.status(500).json(stripeErr);
      } else {
        console.log("Stripe response:", stripeRes);
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;