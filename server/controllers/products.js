const axios = require('axios');

module.exports = {
  getProduct: async (req, res) => {
    await axios.get(`http://127.0.0.1:3000/products/?product_id=${req.query.product_id}`)
    .then(result => {
      console.log(req)
      res.send(result.data)
    })
    .catch(err => {
      res.status(500).send(`Error: ${err}`)
    })
  }
}

