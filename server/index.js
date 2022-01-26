const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Import your routers here
const productOverview = require('./routes/productOverview.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

// Place your routers
app.use('/productOverview', productOverviewRouter);

app.listen(port, () => console.log('Listening on:', port));