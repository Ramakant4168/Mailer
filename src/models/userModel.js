import Sequelize from 'sequelize';

/**
 * Class defining the user info
 */
class UserModal {

    /**
     * Constructor  
     * @return {Object}
     * Instance of this class
     */
    constructor(db) {
        this.db = db;
        this.Op = Sequelize.Op;
        this.userModel = this.defineSchema();
    }


    /**
     * Create the user schema
     *
     * @return {Object}
     * Model of user
     */
    defineSchema() {
        const model = this.db.define('user', {

            userId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                field: 'user_id',
            },
            userName: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'user_name',
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'email',
            },
            countryId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                field: 'country_id',
            },
            clientId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                field: 'client_id',
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
            tableName: 'user'
        });
        return model;
    }

    /**
     * DB access to get UTC offsets 
     *
     * @returns {Promise} Promise after getting offsets.
     */
    getusers(locationArray) {

        return this.userModel
            .findAll({
                where: {
                    countryId: {
                        [this.Op.in]: locationArray
                    }
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {

                console.log("Error: operation failed for getting users");
                console.log(err);
            })

    }

}

export default UserModal;