'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Grupo, {
        foreignKey: 'user_id'
      })
      User.hasMany(models.Material, {
        foreignKey: 'user_id'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    user_cod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    user_nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_sen: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_dat_cria: {
      allowNull: false,
      type: DataTypes.DATE
    },
    user_dat_atua: {
      allowNull: false,
      type: DataTypes.DATE
    },
    user_dat_ultimo: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'user',
    timestamps: false,
  });

  return User;
};