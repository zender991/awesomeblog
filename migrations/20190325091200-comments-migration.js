module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'comments',
      'userId',
      Sequelize.INTEGER,
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'firstName', 'name');
  },
};
