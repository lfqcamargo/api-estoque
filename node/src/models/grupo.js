'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Grupo extends Model {
    static associate(models) {
      Grupo.belongsTo(models.Usuario, { 
        foreignKey: 'user_id' 
      });
      Grupo.hasMany(models.Material, {
        foreignKey: 'grup_id'
      })
    }
  }
  Grupo.init({
    id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    grup_dat_cria: {
      allowNull: false,
      type: DataTypes.DATE
    },
    grup_dat_atua: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Grupo',
    tableName: 'grup',
    timestamps: false,
  });

  return Grupo;
};
