const Repository = require('./repository');
const wrapper = require('../../helpers/utils/wrapper');
const logger = require('../../helpers/utils/logger');
const { jobTypes } = require('../../helpers/utils/constant');
const { InternalServerError } = require('../../helpers/error');
const { baseUrlSourceData } = require('../../helpers/utils/constant');

class Usecase {
  constructor() {
    this.repository = new Repository();
    this.ctx = __filename;
  }

  async findJobs({ page, fullTime, location, description }){
    let url = baseUrlSourceData.ALL;

    if (page) {
      url += `?page=${page}`;
    }

    let { err, data } = await this.repository.findJobs(url);
    if (err) {
      logger.error(this.ctx, err, 'findJobs()');
      return wrapper.error(new InternalServerError(err));
    }

    if (fullTime) {
      data.data = data.data.filter(row => row.type === jobTypes.fullTime);
    }

    if (location) {
      data.data = data.data.filter(row => row.location.toLowerCase().indexOf(location.toLowerCase()) != -1);
    }

    if (description) {
      data.data = data.data.filter(row => row.description.toLowerCase().indexOf(description.toLowerCase()) != -1);
    }

    return wrapper.data({
      rows: data.data,
      count: data.data.length
    });
  }

  async getJob({ id }){
    const { err, data } = await this.repository.findJobs(`${baseUrlSourceData.DETAIL}${id}`);
    if (err) {
      logger.error(this.ctx, err, 'getJob()');
      return wrapper.error(new InternalServerError(err));
    }

    return wrapper.data(data.data);
  }
}

module.exports = Usecase;
