
import Sequelize from 'sequelize';
import config from '../../config.json';

class ServiceModal{

  constructor(){

     this.sequelize = new Sequelize(
       config.db.database,
       config.db.user,
       config.db.password, 
       {
        host: '127.0.0.1',
        port:3306,
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
    });
  }

  getDb(){
    return this.sequelize;
  }

  closeDb() {
    this.sequelize.close();
  }

}

export default ServiceModal;

