const productOverviewRouter = require('express').Router();

productOverviewRouter.get('/overview', (req, res) => {
  console.log('product');
  res.status(200).send('PRODUCT OVERVIEW: GET');
})

module.exports = productOverviewRouter;