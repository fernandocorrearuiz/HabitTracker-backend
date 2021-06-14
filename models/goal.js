"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      goal.belongsTo(models.user);
    }
  }
  goal.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      objective: DataTypes.STRING,
      currentLevel: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "goal",
    }
  );
  return goal;
};
