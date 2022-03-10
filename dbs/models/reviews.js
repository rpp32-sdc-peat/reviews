const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  page: {type: Number},
  count: {type: Number}
});

const reviewSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  product_id: {type: Number},
  rating: {type: Number},
  date: {type: Date},
  reviewdate: {type: String},
  summary: {type: String},
  body: {type: String},
  recommend: {type: String},
  reported: {type: String},
  response: {type: String},
  reviewer_name: {type: String},
  helpfulness: {type: Number},
  photos: {type: Array}
});

const photoSchema = new mongoose.Schema({
  productid: {type: Number},
  reviewid: {type: Number},
  photoid: {type: Number},
  url: {type: String}
});

const Review = mongoose.model('Review', reviewSchema);

const Product = mongoose.model('Product', productSchema);

const Photo = mongoose.model('Photo', photoSchema);

module.exports.Review = Review;

module.exports.Product = Product;

module.exports.Photo = Photo;