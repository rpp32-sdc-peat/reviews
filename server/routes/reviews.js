const reviewsRouter = require('express').Router();

reviewsRouter.get('/reviews', (req, res) => {
  console.log('reviews');
  res.status(200).send('REVIEWS: GET');
});



module.exports = reviewsRouter;