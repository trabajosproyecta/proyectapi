module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin@trabajosproyecta.cl",
          password: "123123",
          name: "don gabo",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
}