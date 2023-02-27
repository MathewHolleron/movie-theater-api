const express = require('express');
const app = express();
const {Show} = require('./models/Show')
const {sequelize} = require('./db')






app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});