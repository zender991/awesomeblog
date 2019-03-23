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

  User.getUserById = async userId => User.findOne({
    where: {
      id: userId,
    },
  });

  User.updateUserById = async (userId, firstName, lastName) => User.update(
    { firstName, lastName },
    { where: { id: userId } },
  );

  User.deleteUserById = async userId => User.destroy({
    where: {
      id: userId,
    },
  });

  return User;
};
