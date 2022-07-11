const models = require('../../helpers/databases/mariadb/models');
const wrapper = require('../../helpers/utils/wrapper');

class Repository {
  constructor() {
    this.models = models.init();
  }

  async findOneByUsername(username) {
    try {
      return wrapper.data(
        await this.models.Users.findOne({
          where: {
            username
          }
        })
      );
    } catch (error) {
      return wrapper.error(error);
    }
  }
}

module.exports = Repository;
