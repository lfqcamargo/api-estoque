'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sles extends Model {
    static associate(models) {
      Sles.belongsTo(models.User, { foreignKey: 'user_id' }),
      Sles.hasMany(models.Enes, { foreignKey: 'sles_id' })
    }
  }
  Sles.init({
    sles_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sles_dsc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    sles_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    sles_dat_atua: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sles_obs: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null
    },
  }, {
    sequelize,
    modelName: 'Sles',
    tableName: 'sles',
    timestamps: false,
  });

  return Sles;
};
