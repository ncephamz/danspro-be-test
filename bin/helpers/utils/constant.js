const responseMessages = {
  TOKEN: {
    401: 'Access token expired!',
    403: 'Invalid token!',
    400: 'Token is not valid!'
  },
  AUTH: {
    LOGIN: {
      200: 'login has been succesfully',
      401: 'invalid username or password',
    }
  },
  JOBS: {
    ALL: {
      200: 'find jobs has been succesfully',
    },
    DETAIL: {
      200: 'get job detail has been succesfully',
    }
  }
};

const general = {
  FAIL: 'fail',
  SUCCESS: 'success'
};

const tableNames = {
  USERS: 'users',
  JOBS: 'jobs'
};

const jobTypes = {
  fullTime: 'Full Time'
};

module.exports = {
  responseMessages,
  general,
  tableNames,
  jobTypes
};