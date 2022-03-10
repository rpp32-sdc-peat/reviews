const reviewsRouter = require('express').Router();
const express = require('express');
const proxy = require('express-http-proxy');

const { reviews } = require('../controllers/reviews.js');
const { getReviews, getProduct, getReviewsMeta, createReview } = reviews;

// reviewsRouter.route('/reviews')
//   .get((req, res) => {proxy(getReviews(req, res))})
//   .post((req, res) => {proxy(createReview(req, res))})

reviewsRouter.get('/', (req, res) => {
  console.log('reviews');
  res.status(200).send('REVIEWS: GET');
});

reviewsRouter.post('/', (req, res) => {
  console.log('reviews');
  res.status(201).end('REVIEWS: POST');
});

module.exports = reviewsRouter;