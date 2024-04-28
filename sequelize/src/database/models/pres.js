'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pres extends Model {
    static associate(models) {
      Pres.belongsTo(models.User, { foreignKey: 'user_id' }),
      Pres.hasMany(models.Enes, { foreignKey: 'pres_id' })
    }
  }
  Pres.init({
    pres_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    pres_dsc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    pres_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    pres_dat_atua: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pres_obs: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
      },
  }, {
    sequelize,
    modelName: 'Pres',
    tableName: 'pres',
    timestamps: false,
  });

  return Pres;
};
