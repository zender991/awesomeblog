const { users } = require('../models');

async function addNewUser(req, res) {
  const { firstName, lastName } = req.body;
  await users.createUser(firstName, lastName);
  res.render('index');
}

async function addNewUserForm(req, res) {
  res.render('addUser');
}

module.exports = { addNewUser, addNewUserForm };
