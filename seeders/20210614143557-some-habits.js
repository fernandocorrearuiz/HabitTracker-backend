"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "habits",
      [
        {
          name: "Michael Jackson's glove",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andy Warhol's painting",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("habits", null, {});
  },
};
