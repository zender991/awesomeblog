const express = require('express');
const { addNewUser, addNewUserForm } = require('../users/addNewUser');
const { editUser, editUserForm } = require('../users/editUser');

const router = express.Router();

router.get('/add-user-form', addNewUserForm);
router.post('/add-user', addNewUser);
router.get('/edit-user-form', editUserForm);
router.post('/edit-user', editUser);

module.exports = router;
