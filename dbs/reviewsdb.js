const mongoose = require('mongoose');

mongoose.connect('mongodb://ted:ted@54.92.135.36:27017/sdc')
.then(db => {
  console.log(`Connected to mongo`)
})
.catch(err => {
  console.log(`There was a problem connecting to mongo`);
  console.log(err);
});


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

const getReviews = (product_id, sort, limit) => {
  // return Review.findOne({product_id: 12});
  if (sort === 'newest') {
    return Review.findOne({product_id: Number(product_id)}).lean();

  } else if (sort === 'helpful') {
    return Review.findOne({product_id: Number(product_id)});
  }
}

const getReviewsMeta = (product_id) => {
  return Review.find({product_id: Number(product_id)});
}

const getProduct = (id) => {
  return Product.findOne({id: Number(id)});
}

const postReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
  Review.create({product_id: product_id, rating: rating, date: Date.now(), summary: summary, body: body, recommend: recommend.toString(), reported: 'false', reviewer_name: name, reviewer_email: email, photos: photos, characteristics: characteristics}, (err, result) => {
    if (err) {
      console.log(err);
    } else  {
      console.log('success');
    }
  })
}



module.exports.getReviews = getReviews;
module.exports.getProduct = getProduct;
module.exports.postReview = postReview;
module.exports.getReviewsMeta = getReviewsMeta;
