'use strict';
module.exports = (sequelize, DataTypes) => {
  class Grup extends sequelize.Sequelize.Model {
    static associate(models) {
      Grup.hasMany(models.Mate, { 
        foreignKey: 'grup_id',
        as: 'materiaisGrupo'
      }),
      Grup.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Grup.init({
    grup_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    grup_dsc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    grup_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id',
      }
    },
    grup_dat_atua: {
      type: DataTypes.DATE,
      allowNull: false
    },
    grup_obs: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Grup',
    tableName: 'grup',
    timestamps: false
  });

  return Grup;
};
