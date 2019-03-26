module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    text: {
      type: Sequelize.TEXT,
    },
  }),
  down: queryInterface => queryInterface.dropTable('comments'),
};
