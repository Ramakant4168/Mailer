module.exports = {
  up: (queryInterface, Sequelize) => 
  (queryInterface.createTable('location', {
      
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
    },
  })),
  down: (queryInterface) => 
  (queryInterface.dropTable('location')),
};
