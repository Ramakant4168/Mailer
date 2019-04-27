import Sequelize from 'sequelize';

/**
 * Class defining the UTC offsets 
 */
class ClientModel {

    /**
     * Constructor  
     * @return {Object}
     * Instance of this class
     */
    constructor(db) {
        this.db = db;
        this.clientModel = this.defineSchema();
    }

    /**
     * Create the client schema
     *
     * @return {Object}
     * Model of location
     */
    defineSchema() {
        const model = this.db.define('client', {

            clientId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                field: 'client_id',
            },
            clientName: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'client_name',
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
            tableName: 'client'
        });
        return model;
    }

}

export default ClientModel;