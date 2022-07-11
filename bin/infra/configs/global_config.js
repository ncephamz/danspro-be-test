require('dotenv').config();
const confidence = require('confidence');

const config = {
  port: process.env.PORT,
  secretKey: {
    jwt: process.env.SECRET_JWT,
    encryptPasswordProfile: process.env.SECRET_ENCRYPT_PASSWORD_PROFILE
  },
  basicAuth: {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD
  },
  basicAuthApi: [
    {
      username: process.env.BASIC_AUTH_USERNAME,
      password: process.env.BASIC_AUTH_PASSWORD
    }
  ],
  mongoDbUrl: process.env.MONGO_DATABASE_URL
};

const store = new confidence.Store(config);

exports.get = key => store.get(key);
