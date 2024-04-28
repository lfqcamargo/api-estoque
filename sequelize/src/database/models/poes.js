'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Poes extends Model {
    static associate(models) {
      Poes.belongsTo(models.User, { foreignKey: 'user_id' }),
      Poes.hasMany(models.Enes, { foreignKey: 'poes_id' })
    }
  }
  Poes.init({
    poes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    poes_dsc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    poes_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    poes_dat_atua: {
      type: DataTypes.DATE,
      allowNull: false
    },
    poes_obs: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
      },
  }, {
    sequelize,
    modelName: 'Poes',
    tableName: 'poes',
    timestamps: false,
  });

  return Poes;
};
