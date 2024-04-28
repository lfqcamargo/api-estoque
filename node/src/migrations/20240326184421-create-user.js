'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      user_cod: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      user_nom: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_sen: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      user_dat_cria: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_dat_atua: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_dat_ultimo: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};
