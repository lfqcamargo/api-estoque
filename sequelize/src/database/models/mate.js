'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mate extends Model {
    static associate(models) {
      Mate.belongsTo(models.User, { foreignKey: 'user_id' });
      Mate.belongsTo(models.Grup, { foreignKey: 'grup_id' });
    }
  }
  Mate.init({
    mate_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    mate_dsc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    grup_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mate_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mate_dat_atua: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mate_obs: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Mate',
    tableName: 'mate',
    timestamps: false
  });
  return Mate;
};
