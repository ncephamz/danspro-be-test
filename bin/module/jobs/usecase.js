const Repository = require('./repository');
const wrapper = require('../../helpers/utils/wrapper');
const logger = require('../../helpers/utils/logger');
const { jobTypes } = require('../../helpers/utils/constant');
const { InternalServerError } = require('../../helpers/error');
const { job } = require('./entity');

class Usecase {
  constructor() {
    this.repository = new Repository();
    this.ctx = __filename;
  }

  async findJobs({ page, limit, fullTime, location, description }){
    fullTime = fullTime ? jobTypes.fullTime : fullTime;

    const { err, data } = await this.repository.findJobs(page, limit, fullTime, location, description);
    if (err) {
      logger.error(this.ctx, err, 'findJobs()');
      return wrapper.error(new InternalServerError(err));
    }

    data.rows = data.rows.map(row => job(row));

    return wrapper.data(data);
  }

  async getJob({ id }){
    const { err, data } = await this.repository.getJob(id);
    if (err) {
      logger.error(this.ctx, err, 'getJob()');
      return wrapper.error(new InternalServerError(err));
    }

    return wrapper.data(job(data));

  }
}

module.exports = Usecase;
