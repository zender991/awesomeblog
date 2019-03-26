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
      userAvatar: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.comments, { as: 'Comments' });
  };

  User.createUser = async (firstName, lastName, userAvatar) => User.create({
    firstName,
    lastName,
    userAvatar,
  });

  User.getAllUsers = () => {
    return User.findAll({
      include: [{ model: sequelize.models.comments, as: 'Comments' }],
    });
  };

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
