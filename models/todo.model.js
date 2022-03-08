module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define("todo", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  });

  return { todo };
};
