import Sequelize from 'sequelize';

/**
 * Class defining the UTC offsets 
 */
class TimeZoneModel {

    /**
     * Constructor  
     * @return {Object}
     * Instance of this class
     */
    constructor(db) {
        this.db = db;
        this.timeZoneModel = this.defineSchema();
    }

    /**
     * Create the location schema
     *
     * @return {Object}
     * Model of location
     */
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
        }, {
            tableName: 'timezone'
        });
        return model;
    }

    /**
     * DB access to get UTC offsets 
     *
     * @returns {Promise} Promise after getting offsets.
     */
    getOffsets() {

        return this.timeZoneModel
            .findAll({
                attributes: {
                    exclude: ['created_at']
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {

                console.log("operation failed for timezone offset retrieval");
                console.log(err);
            })

    }

}

export default TimeZoneModel;