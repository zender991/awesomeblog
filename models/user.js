module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  User.createUser = async (firstName, lastName) => User.create({
    firstName,
    lastName,
  });

  User.getAllUsers = () => User.findAll();

  return User;
};
