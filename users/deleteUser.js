const { users } = require('../models/index');

async function deleteUser(req, res) {
  const userId = req.query.id;
  await users.deleteUserById(userId);
  res.redirect('/');
}

module.exports = { deleteUser };
