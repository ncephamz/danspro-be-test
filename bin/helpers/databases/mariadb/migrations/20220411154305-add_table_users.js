const { tableNames } = require('../../../utils/constant');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.USERS, {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      last_login: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }).then(() => [
      queryInterface.addIndex(tableNames.USERS, { fields: ['id'], name: `${tableNames.USERS}_id_idx` }),
      queryInterface.addIndex(tableNames.USERS, { fields: ['username'], name: `${tableNames.USERS}_username_idx` }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.USERS);
  }
};

