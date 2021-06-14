"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "weights",
      [
        {
          Kg: 76.8,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Kg: 78,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("weights", null, {});
  },
};
