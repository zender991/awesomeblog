const express = require('express');

const router = express.Router();


router.get('/addForm', (req, res, next) => {
  res.render('addUser');
});

router.post('/add-user', (req, res, next) => {
  console.log(req.body.name);
});

module.exports = router;
