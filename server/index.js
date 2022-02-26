const express = require('express');

const expressStaticGzip = require("express-static-gzip");
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

const db = require('../dbs/reviewsdb.js');

// Import your routers here
// const productOverviewRouter = require('./routes/productOverview.js');
// const questionsAndAnswersRouter = require('./routes/questionsAndAnswers.js')
// const reviewsRouter = require('./routes/reviews.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", expressStaticGzip(path.join(__dirname, '../client/dist'), {
  enableBrotli: true
}));

// app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/reviews', (req, res) => {
  db.getReviews(req.query.product_id, req.query.sort, req.query.count)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/products', (req, res) => {
  console.log(req.query)
  db.getProduct()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  })
})

//product_id, rating, summary, body, recommend, name, email, photos, characteristics)

app.post('/reviews', (req, res) => {
  console.log(req.body);
  db.postReview(req.body.product_id, req.body.rating, req.body.summary, req.body.body, req.body.recommend, req.body.name, req.body.email, req.body.photos, req.body.characteristics);
  res.status(201).send('post success');
})

// Place your routers
// app.use('/productOverview', productOverviewRouter);
// app.use('/qa', questionsAndAnswersRouter);
// app.use('/reviews', reviewsRouter);

