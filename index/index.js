const { users } = require('../models');

async function indexPage(req, res) {
  const templateUsers = [];
  const allUsers = await users.getAllUsers();
  for (let i = 0; i < allUsers.length; i += 1) {
    const comments = [];
    if (allUsers[i].Comments.length > 0) {
      for (let j = 0; j < allUsers[i].Comments.length; j += 1) {
        comments.push(allUsers[i].Comments[j].text);
      }
    }
    const currUser = {
      id: allUsers[i].id,
      firstName: allUsers[i].firstName,
      lastName: allUsers[i].lastName,
      userAvatar: allUsers[i].userAvatar,
      comments: comments.length > 0 ? comments : '',
    };
    templateUsers.push(currUser);
  }

  return res.render('index', { users: templateUsers });
}

module.exports = { indexPage };
