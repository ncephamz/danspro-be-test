const models = require('../../helpers/databases/mariadb/models');
const wrapper = require('../../helpers/utils/wrapper');

class Repository {
  constructor() {
    this.models = models.init();
    this.sequelize = this.models.sequelize;
  }

  async findJobs(page = 1, limit = 10, jobType, location, description) {
    try {
      let query = {
        limit,
        offset: Number((page - 1) * limit),
        where: {}
      };

      if (jobType) {
        query.where.type = jobType;
      }

      if (location) {
        query.where.location = this.sequelize.where(this.sequelize.fn('LOWER', this.sequelize.col('location')), 'LIKE', `%${location}%`);
      }

      if (description) {
        query.where.description = this.sequelize.where(this.sequelize.fn('LOWER', this.sequelize.col('description')), 'LIKE', `%${description}%`);
      }

      return wrapper.data(
        await this.models.Jobs.findAndCountAll(query)
      );
    } catch (error) {
      return wrapper.error(error);
    }
  }

  async getJob(id){
    try {
      return wrapper.data(
        await this.models.Jobs.findOne({
          where: {
            id
          }
        })
      );
    } catch (error) {
      return wrapper.error(error);
    }
  }
}

module.exports = Repository;
