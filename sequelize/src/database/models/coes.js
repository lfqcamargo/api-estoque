'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Coes extends Model {
    static associate(models) {
      Coes.belongsTo(models.User, { foreignKey: 'user_id' }),
      Coes.hasMany(models.Enes, { foreignKey: 'coes_id' })
    }
  }
  Coes.init({
    coes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    coes_dsc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    coes_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    coes_dat_atua: {
      type: DataTypes.DATE,
      allowNull: false
    },
    coes_obs: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null
    },
  }, {
    sequelize,
    modelName: 'Coes',
    tableName: 'coes',
    timestamps: false,
  });

  return Coes;
};
