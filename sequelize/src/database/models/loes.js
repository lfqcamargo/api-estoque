'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Loes extends Model {
    static associate(models) {
      Loes.belongsTo(models.User, { foreignKey: 'user_id' }),
      Loes.hasMany(models.Enes, { 
        foreignKey: 'loes_id'
      })
    }
  }
  Loes.init({
    loes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    loes_dsc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    loes_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    loes_dat_atua: {
        type: DataTypes.DATE,
        allowNull: false
      },
    loes_obs: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
  }, {
    sequelize,
    modelName: 'Loes',
    tableName: 'loes',
    timestamps: false,
  });

  return Loes;
};
