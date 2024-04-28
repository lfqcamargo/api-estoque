'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('grup', {
      grup_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      grup_dsc: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      grup_dat_cria: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      grup_dat_atua: {
        type: Sequelize.DATE,
        allowNull: false
      },
      grup_obs: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('grup');
  }
};
