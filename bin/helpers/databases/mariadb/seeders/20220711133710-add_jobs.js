const { tableNames } = require('../../../utils/constant');
const jobs = require('../templates/jobs.json');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableNames.JOBS, jobs.map(job => ({
      ...job,
      created_at: new Date(job.created_at)
    })));
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableNames.JOBS, null, { truncate: true });
  }
};
