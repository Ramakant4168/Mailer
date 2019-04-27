module.exports = {
  up: (queryInterface, Sequelize) => 
    (queryInterface.createTable('timezone', {  
      offsetId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'offset_id',
      },
      offset: {
        type: Sequelize.STRING,
        allowNull: false,
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
    })),
  down: (queryInterface) => 
   ( queryInterface.dropTable('timezone')),
};
