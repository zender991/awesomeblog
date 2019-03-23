const express = require('express');
const { addNewUser, addNewUserForm } = require('../users/addNewUser');
const { editUser, editUserForm } = require('../users/editUser');
const { deleteUser } = require('../users/deleteUser');

const router = express.Router();

router.get('/add-user-form', addNewUserForm);
router.post('/add-user', addNewUser);
router.get('/edit-user-form', editUserForm);
router.post('/edit-user', editUser);
router.get('/delete-user', deleteUser);

module.exports = router;
