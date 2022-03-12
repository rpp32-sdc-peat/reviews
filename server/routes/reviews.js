const router = require('express').Router();
const express = require('express');
const proxy = require('express-http-proxy');

const controller = require('../controllers/reviews.js')

router.get('/reviews', controller.getReviews);

router.get('/reviews/meta', controller.getReviewsMeta);

router.post('/reviews', controller.createReview);

module.exports = router;