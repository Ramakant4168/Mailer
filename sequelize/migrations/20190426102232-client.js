module.exports = {
  up: (queryInterface, Sequelize) => (queryInterface.createTable('client', {
      
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
  })),
  down: (queryInterface) =>  (queryInterface.dropTable('client')),
};
