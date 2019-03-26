module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'comments',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: DataTypes.TEXT,
    },
    {
      timestamps: false,
    },
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  Comment.getAllComments = () => {
    return Comment.findAll({
      include: [{
        model: sequelize.models.users,
      }],
    });
  };

  Comment.getCommentByUserId = async (userId) => {
    return Comment.findAll({
      where: {
        userId,
      },
      include: [{
        model: sequelize.models.users,
      }],
    });
  };

  return Comment;
};
