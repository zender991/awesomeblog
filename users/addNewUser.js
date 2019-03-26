const fs = require('fs');

const { users } = require('../models');
const { uploadImageToS3 } = require('../helpers/uploadImageToS3');
const config = require('../config/config');


async function addNewUser(req, res) {
  const { firstName, lastName } = req.body;
  console.log(req.file);

  const filePath = `${config.HOST.hostLink}/images/${req.file.filename}`;
  const image = await uploadImageToS3(filePath, req.file.originalname);
  console.log('image - ', image);
  // const userAvatar = `${config.S3.bucketLink}${req.file.originalname}`;
  const userAvatar = image.Location;
  await users.createUser(firstName, lastName, userAvatar);

  const removePath = `./${req.file.path}`;
  console.log('fp - ', removePath);
  fs.unlinkSync(removePath);
  res.redirect('/');
}

async function addNewUserForm(req, res) {
  res.render('addUser');
}

module.exports = { addNewUser, addNewUserForm };
