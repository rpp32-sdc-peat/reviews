
const express = require('express');
const router = require('express').Router();
const proxy = require('express-http-proxy');

const controller = require('../controllers/products.js')

router.get('/products', controller.getProduct);


module.exports = router;

//example:
//router.get('/reviews/:itemId', cacheMiddleware(30), controllers.reviews.get);