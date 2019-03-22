const express = require('express');

const router = express.Router();
const userRoutes = require('./users');
const { indexPage } = require('../index/index');

router.use('/users', userRoutes);

router.get('/', indexPage);

module.exports = router;
