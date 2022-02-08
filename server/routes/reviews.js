const reviewsRouter = require('express').Router();

reviewsRouter.get('/reviews', (req, res) => {
  console.log('reviews');
  res.status(200).send('REVIEWS: GET');
});

reviewsRouter.post('/reviews', (req, res) => {
  console.log('reviews');
  res.status(201).end('REVIEWS: POST');
});
reviewsRouter.post('/reviews')

module.exports = reviewsRouter;