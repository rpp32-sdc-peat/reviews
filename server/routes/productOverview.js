const productOverviewRouter = require('express').Router();

productOverviewRouter.get('/overview'), async (req, res) => {
  res.status(200).send('PRODUCT OVERVIEW: GET');
}

export.modules = productOverviewRouter;