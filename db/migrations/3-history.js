'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('History', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            references: {
              model: 'General',
              key: 'generalID',
            },
      },
      companyNameHistory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      positionHistory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      salaryHistory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateEmployedHistory: {
        allowNull: true,
        type: Sequelize.DATE
      },
      toDateHistory: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('History');
  }
};
