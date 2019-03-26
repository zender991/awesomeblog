const express = require('express');
const multer = require('multer');
const { addNewUser, addNewUserForm } = require('../users/addNewUser');
const { editUser, editUserForm } = require('../users/editUser');
const { deleteUser } = require('../users/deleteUser');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.png`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.get('/add-user-form', addNewUserForm);

router.post('/add-user', upload.single('foo'), (req, res) => {
  addNewUser(req, res);
});

router.get('/edit-user-form', editUserForm);
router.post('/edit-user', editUser);
router.get('/delete-user', deleteUser);

module.exports = router;
