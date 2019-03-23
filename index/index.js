const { users } = require('../models');

async function indexPage(req, res) {
  const templateUsers = [];
  const allUsers = await users.getAllUsers();
  for (let i = 0; i < allUsers.length; i += 1) {
    const currUser = {
      id: allUsers[i].id,
      firstName: allUsers[i].firstName,
      lastName: allUsers[i].lastName,
    };
    templateUsers.push(currUser);
  }

  return res.render('index', { users: templateUsers });
}

module.exports = { indexPage };
