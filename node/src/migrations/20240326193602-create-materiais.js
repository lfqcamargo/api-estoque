'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mate_dsc: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      grup_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'grup', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      mate_dat_cria: {
        allowNull: false,
        type: Sequelize.DATE
      },
      mate_dat_atua: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mate');
  }
};
