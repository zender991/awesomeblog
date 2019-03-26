const AWS = require('aws-sdk');
const request = require('request-promise-native');
const config = require('../config/config');


async function uploadImageToS3(imageUrl, fileName) {
  let uploadResult = 'Error';
  AWS.config.update({
    accessKeyId: config.AWS.awsKey,
    secretAccessKey: config.AWS.awsSecret,
  });

  const s3 = new AWS.S3({ signatureVersion: 'v4', apiVersion: '2006-03-01' });

  const options = {
    uri: imageUrl,
    encoding: null,
  };

  const body = await request(options);

  try {
    uploadResult = await s3.upload({
      Bucket: config.S3.bucketName,
      Key: fileName,
      Body: body,
      ContentType: 'image/jpeg',
    }).promise();
  } catch (err) {
    console.log(err);
  }
  return uploadResult;
}

module.exports = { uploadImageToS3 };
