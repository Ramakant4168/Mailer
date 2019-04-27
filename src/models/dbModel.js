import Sequelize from 'sequelize';
import config from '../../config.json';

/**
 * Class defining the database utilities
 */
class ServiceModal {

  /**
   * Constructor Initializes Db connection 
   * @return {Object}
   * Instance of this class
   */
  constructor() {

    this.sequelize = new Sequelize(
      config.db.database,
      config.db.user,
      config.db.password, {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
        operatorsAliases: false,

        pool: {
          max: config.db.maxPoolSize,
          min: config.db.mminPoolSize,
          acquire: 30000,
          idle: 10000
        },
      });
  }

  /**
   * Returns instance of the db object
   *
   * @return {object}
   * sequelize db instance
   */
  getDb() {
    return this.sequelize;
  }

  /**
   * Closes the db connection.
   */
  closeDb() {
    this.sequelize.close();
  }

}

export default ServiceModal;