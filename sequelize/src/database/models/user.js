'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Grup, { foreignKey: 'user_id'}),
      User.hasMany(models.Mate, { foreignKey: 'user_id' }),
      User.hasMany(models.Loes, { foreignKey: 'user_id' }),
      User.hasMany(models.Sles, { foreignKey: 'user_id' }),
      User.hasMany(models.Coes, { foreignKey: 'user_id' }),
      User.hasMany(models.Pres, { foreignKey: 'user_id' }),
      User.hasMany(models.Poes, { foreignKey: 'user_id' }),
      User.hasMany(models.Enes, { foreignKey: 'user_id' })
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true
    },
    user_dsc_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email Inválido'
        }
      }
    },
    user_has_senha: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    user_dat_cria: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_dat_atua: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_ind_ativo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    user_dat_login: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: false,
    defaultScope: {
      where: {
        user_ind_ativo: true,
      }
    },
    scopes: {
      todosOsRegistros: {
        where: {}
      }
    }
  });

  return User;
};
