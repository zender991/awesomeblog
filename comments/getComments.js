const { comments } = require('../models/index');


async function getAllComments(req, res) {
  console.log('111111');
  // const allComments = await comments.getAllComments();
  // console.log(allComments);
  // for (let i = 0; i < allComments.length; i += 1) {
  //   console.log(allComments[i].user.firstName);
  //   console.log(allComments[i].text);
  // }

  const comm = await comments.getCommentByUserId('2');
  console.log(comm);
  console.log('2222');
  for (let i = 0; i < comm.length; i += 1) {
    console.log(comm[i].id);
  }
}

module.exports = { getAllComments };
