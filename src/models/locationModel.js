import Sequelize from 'sequelize';

/**
 * Class defining the country and there UTC offsets
 */
class LocationModal {

    /**
     * Constructor  
     * @return {Object}
     * Instance of this class
     */
    constructor(db) {
        this.db = db;
        this.Op = Sequelize.Op;
        this.locationModel = this.defineSchema();
    }

    /**
     * Create the location schema
     *
     * @return {Object}
     * Model of location
     */
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
        }, {
            tableName: 'location'
        });
        return model;
    }

    /**
     * DB access to get countries with given offset
     *
     * @param {Array} filteredOffsetArray array containing offsets.
     * @returns {Promise} Promise after getting countryids.
     */
    getlocations(filteredOffsetArray) {

        return this.locationModel
            .findAll({
                attributes: ['countryId'],
                where: {
                    offsetId: {
                        [this.Op.in]: filteredOffsetArray
                    }
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {

                console.log("Error: operation failed for getting locations");
                console.log(err);
            })

    }

}

export default LocationModal;