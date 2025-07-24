"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "nhathuy1@gmail.com",
          password: "huytdn1",
          username: "nhathuy1",
        },
        {
          email: "nhathuy2@gmail.com",
          password: "huytdn2",
          username: "nhathuy2",
        },
        {
          email: "nhathuy3@gmail.com",
          password: "huytdn3",
          username: "nhathuy3",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
