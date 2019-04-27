
import Sequelize from 'sequelize';

class LocationModal{

    constructor(db) {
        this.db = db;
        this.Op = Sequelize.Op;
        this.locationModel = this.defineSchema();
    }

    defineSchema() {
        const model = this.db.define('location', {
            
            countryId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                field: 'country_id',
            },
            countryName: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'country_name',
            },
            offsetId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                field: 'offset_id',
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
            }
        },  
        {
            tableName: 'location'
        });
        return model;
    }

    getlocations(filteredOffsetArray){

        return this.locationModel
        .findAll({
            attributes: ['countryId'],
            where: {
                offsetId: {
                    [this.Op.in]: filteredOffsetArray
                }
            }
         })
        .then((data)=>{
           return data;
        })
        .catch((err)=>{

            console.log("Error: operation failed for getting locations");
            console.log(err);
        })
  
    }

}

export default LocationModal;

