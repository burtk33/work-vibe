const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Progress extends Model {}

Progress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    part_of_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'progress',
  }
);

module.exports = Progress;