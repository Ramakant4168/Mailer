
import Sequelize from 'sequelize';

class TimeZoneModel{

    constructor(db) {
        this.db = db;
        this.timeZoneModel = this.defineSchema();
    }

    defineSchema() {
        const model = this.db.define('timezone', {
            
            offsetId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                field: 'offset_id',
            },
            offset: {
                type: Sequelize.STRING,
                field: 'offset',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                field: 'created_at',
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                field: 'updated_at',
            },
        },  
        {
            tableName: 'timezone'
        });
        return model;
    }

    getOffsets(){

        return this.timeZoneModel
        .findAll({
            attributes: { exclude: ['created_at'] }
        })
        .then((data)=>{
        return data;
        })
        .catch((err)=>{

            console.log("operation failed for timezone offset retrieval");
            console.log(err);
        })
  
    }

}

export default TimeZoneModel;

