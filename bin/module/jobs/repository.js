const wrapper = require('../../helpers/utils/wrapper');
const Axios = require('../../helpers/utils/axios');

class Repository {
  constructor() {
    this.axios = new Axios();
  }

  async findJobs(url) {
    try {
      return wrapper.data(await this.axios.get(url));
    } catch (error) {
      return wrapper.error(error);
    }
  }
}

module.exports = Repository;
