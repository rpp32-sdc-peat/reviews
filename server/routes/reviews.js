const reviewsRouter = require('express').Router();

reviewsRouter.get('/', (req, res) => {
  console.log('reviews');
  res.status(200).send('REVIEWS: GET');
});

reviewsRouter.post('/', (req, res) => {
  console.log('reviews');
  res.status(201).end('REVIEWS: POST');
});

module.exports = reviewsRouter;