const express = require('express');

const router = express.Router();
const { getAllComments } = require('../comments/getComments');

router.get('/get-all-comments', getAllComments);

module.exports = router;
