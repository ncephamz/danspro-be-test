const Repository = require('./repository');
const config = require('../../infra/configs/global_config');
const wrapper = require('../../helpers/utils/wrapper');
const logger = require('../../helpers/utils/logger');
const common = require('../../helpers/utils/common');
const jwtAuth = require('../../auth/jwt_auth_helper');
const constant = require('../../helpers/utils/constant');
const { InternalServerError, NotFoundError, UnauthorizedError } = require('../../helpers/error');

class Usecase {
  constructor() {
    this.repository = new Repository();
    this.ctx = __filename;
    this.secretKey = config.get('/secretKey');
  }

  async login({ username, password }){
    const { err, data } = await this.repository.findOneByUsername(username);
    if (err) {
      logger.error(this.ctx, err, 'login()');
      return wrapper.error(new InternalServerError(err));
    }
    if (!data) {
      return wrapper.error(new NotFoundError());
    }

    const decryptPassword = await common.decrypt(data.password, 'aes-256-cbc', this.secretKey.encryptPasswordProfile);
    if (decryptPassword !== password) {
      return wrapper.error(new UnauthorizedError(constant.responseMessages.AUTH.LOGIN[401]));
    }

    return wrapper.data({
      token: await jwtAuth.generateToken({ id: data.id }),
    });
  }
}

module.exports = Usecase;
