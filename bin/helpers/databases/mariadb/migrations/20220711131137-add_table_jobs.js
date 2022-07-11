const { tableNames } = require('../../../utils/constant');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.JOBS, {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      how_to_apply: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      company_logo: {
        type: Sequelize.TEXT,
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
      queryInterface.addIndex(tableNames.JOBS, { fields: ['id'], name: `${tableNames.JOBS}_id_idx` }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.JOBS);
  }
};