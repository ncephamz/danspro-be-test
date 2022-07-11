const { tableNames } = require('../../../utils/constant');
const { v4: uuidv4 } = require('uuid');
const common = require('../../../utils/common');
const users = require('../templates/users.json');

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(tableNames.USERS, await Promise.all(
      users.map(async user => ({
        ...user,
        id: uuidv4(),
        password: await common.encrypt(user.password, 'aes-256-cbc', process.env.SECRET_ENCRYPT_PASSWORD_PROFILE),
      }))
    ));
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(tableNames.USERS, null, { truncate: true });
  },
};
