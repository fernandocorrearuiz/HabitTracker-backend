"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "goals",
      [
        {
          title: "Spiderman",
          objective: "Be Spiderman",
          currentLevel: "Venom",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Superman",
          objective: "Be Superman",
          currentLevel: "Batman",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hulk",
          objective: "Be Hulk",
          currentLevel: "AntMan",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Batman",
          objective: "Be Batman",
          currentLevel: "Robin",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("goals", null, {});
  },
};
