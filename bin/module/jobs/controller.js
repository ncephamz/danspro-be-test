const Usecase = require('./usecase');
const model = require('./model');
const validator = require('../../helpers/utils/validator');
const wrapper = require('../../helpers/utils/wrapper');
const {
  responseMessages,
  general: {
    FAIL,
    SUCCESS
  }
} = require('../../helpers/utils/constant');

const usecase = new Usecase();

const findJobs = async (req, res) => {
  const validatePayload = await validator.isValidPayload(req.query, model.schemaFindJobs());
  if (validatePayload.err) {
    return wrapper.response(res, FAIL, validatePayload, validatePayload.err.message);
  }

  const result = await usecase.findJobs(validatePayload.data);
  if (result.err) {
    return wrapper.response(res, FAIL, result, result.err.message);
  }

  return wrapper.response(res, SUCCESS, result, responseMessages.JOBS.ALL[200]);
};

const getJob = async (req, res) => {
  const validatePayload = await validator.isValidPayload(req.params, model.schemaGetJob());
  if (validatePayload.err) {
    return wrapper.response(res, FAIL, validatePayload, validatePayload.err.message);
  }

  const result = await usecase.getJob(validatePayload.data);
  if (result.err) {
    return wrapper.response(res, FAIL, result, result.err.message);
  }

  return wrapper.response(res, SUCCESS, result, responseMessages.JOBS.DETAIL[200]);
};

module.exports = {
  findJobs,
  getJob
};
