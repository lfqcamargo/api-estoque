'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enes extends Model {
    static associate(models) {
      Enes.belongsTo(models.User, { foreignKey: 'user_id' });
      Enes.belongsTo(models.Loes, { foreignKey: 'loes_id' });
      Enes.belongsTo(models.Sles, { foreignKey: 'sles_id' });
      Enes.belongsTo(models.Coes, { foreignKey: 'coes_id' });      
      Enes.belongsTo(models.Pres, { foreignKey: 'pres_id' });
      Enes.belongsTo(models.Poes, { foreignKey: 'poes_id' });    
    }
  }
  Enes.init({
    enes_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    enes_dat_cria: { type: DataTypes.DATE, allowNull: false },
    enes_dat_atua: { type: DataTypes.DATE, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    loes_id: { type: DataTypes.INTEGER, allowNull: false },
    sles_id: { type: DataTypes.INTEGER, allowNull: false },
    coes_id: { type: DataTypes.INTEGER, allowNull: false },
    pres_id: { type: DataTypes.INTEGER, allowNull: false },
    poes_id: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Enes',
    tableName: 'enes',
    timestamps: false,
  });

  return Enes;
};
