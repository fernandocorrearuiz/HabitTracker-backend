"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class habit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      habit.belongsTo(models.user);
    }
  }
  habit.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consecutiveDays: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "habit",
    }
  );
  return habit;
};
