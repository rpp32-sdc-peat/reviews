const axios = require('axios');

  //routes should have most complicated get request and a put/post route
  //everything works, something is broke (tests)

module.exports = {
  getReviews: async (req, res) => {
    await axios.get(`http://54.92.135.36:3000/reviews/?product_id=${req.query.product_id}&sort=${req.query.sort}&count=${req.query.count}`)
    .then(result => {
      console.log(req)
      res.send(result.data)
    })
    .catch(err => {
      res.status(500).send(`Error: ${err}`)
    })
  },

  createReview: async (req, res) => {
    await axios.post(`http://54.92.135.36:3000/reviews`, req.body)
    .then(result => {
      res.send('New review created')
    })
    .catch(err => {
      res.status(500).send(`Error: ${err}`)
    })
  },

  getReviewsMeta: async (req, res) => {
    await axios.get(`http://54.92.135.36:3000/reviews/meta/?product_id=${req.query.product_id}`)
    .then(result => {
      res.send(result.data)
    })
    .catch(err => {
      res.status(500).send(`Error: ${err}`)
    })
  }
}