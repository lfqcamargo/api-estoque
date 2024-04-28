'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
      Material.belongsTo(models.Grupo, { 
        foreignKey: 'grup_id'
       });
      Material.belongsTo(models.Usuario, { 
        foreignKey: 'user_id'
       });
    }
  }
  Material.init({
    id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mate_dat_cria: {
      allowNull: false,
      type: DataTypes.DATE
    },
    mate_dat_atua: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Material',
    tableName: 'mate',
    timestamps: false,
  });

  return Material;
};
