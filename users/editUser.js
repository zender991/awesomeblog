const { users } = require('../models/index');

async function editUserForm(req, res) {
  const userId = req.query.id;
  const user = await users.getUserById(userId);
  res.render('editUser', { user });
}

async function editUser(req, res) {
  const { id, firstName, lastName } = req.body;
  await users.updateUserById(id, firstName, lastName);
  res.redirect('/');
}

module.exports = { editUserForm, editUser };
