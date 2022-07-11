const joi = require('joi');

const login = () => {
  return joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
  });
};

module.exports = {
  login,
};
