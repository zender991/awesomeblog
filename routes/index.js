const express = require('express');

const router = express.Router();
const userRoutes = require('./users');

router.use('/users', userRoutes);

router.get('/', (req, res, next) => {
  res.render('index', { name: 'Alex', image: 'https://www.w3schools.com/w3css/img_lights.jpg' });
});

module.exports = router;
