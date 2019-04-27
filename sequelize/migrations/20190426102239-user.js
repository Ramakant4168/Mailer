module.exports = {
  up: (queryInterface, Sequelize) => (queryInterface.createTable('user', {
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
    },
  })),
  down: (queryInterface) => 
  (queryInterface.dropTable('user')),
};
