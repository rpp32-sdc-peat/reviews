const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');

// Import your routers here
// const productOverviewRouter = require('./routes/productOverview.js');
// const reviewsRouter = require('./routes/reviews.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", expressStaticGzip(path.join(__dirname, '../client/dist'), {
  enableBrotli: true
}));

// Place your routers
// app.use('/productOverview', productOverviewRouter);
// app.use('/reviews', reviewsRouter);

app.get('/reviews', (req, res) => {
  res.send({response: 'reviews get'});
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log('Listening on:', port));
}

module.exports = app;