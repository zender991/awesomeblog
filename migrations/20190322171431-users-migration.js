module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.addColumn(
    //   'users',
    //   'lastName',
    //   Sequelize.STRING,
    // );
    return queryInterface.renameColumn('users', 'name', 'firstName');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'firstName', 'name');
  },
};
