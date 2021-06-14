"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      weight.belongsTo(models.user);
    }
  }
  weight.init(
    {
      Kg: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "weight",
    }
  );
  return weight;
};
