const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fetcher');

const productSchema = new mongoose.Schema({
  productid: {type: Number, unique: true},
  page: {type: Number},
  count: {type: Number}
});

const reviewSchema = new mongoose.Schema({
  reviewid: {type: Number, unique: true},
  productid: {type: Number},
  rating: {type: Number},
  summary: {type: String},
  recommend: {type: Boolean},
  response: {type: String},
  body: {type: String},
  reviewdate: {type: String},
  reviewer_name: {type: String},
  helpfulness: {type: Number},
  photos: {type: String}
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



