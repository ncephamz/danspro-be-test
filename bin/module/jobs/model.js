const joi = require('joi');

const schemaFindJobs = () => {
  return joi.object({
    page: joi.number().min(1).optional().allow('', null),
    limit: joi.number().min(1).max(100).optional().allow('', null),
    fullTime: joi.boolean().valid(true, false).optional().allow('', null),
    location: joi.string().optional().allow('', null),
    description: joi.string().optional().allow('', null),
  });
};

const schemaGetJob = () => {
  return joi.object({
    id: joi.string().required(),
  });
};

module.exports = {
  schemaFindJobs,
  schemaGetJob
};
