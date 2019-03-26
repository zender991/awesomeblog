const config = {};

config.DB = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PSWD,
};

config.S3 = {
  bucketName: process.env.S3_BUCKET_NAME,
  bucketLink: process.env.S3_BUCKET_LINK,
};

config.AWS = {
  awsKey: process.env.AWS_KEY,
  awsSecret: process.env.AWS_SECRET,
};

config.HOST = {
  hostLink: process.env.HOST,
};

module.exports = config;
