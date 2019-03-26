const express = require('express');

const router = express.Router();
const userRoutes = require('./users');
const commentRoutes = require('./comments');
const { indexPage } = require('../index/index');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

router.get('/', indexPage);

module.exports = router;
