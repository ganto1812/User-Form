const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database");

class User extends Model {}

User.init(
  {
    firstName: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    birthday: { type: DataTypes.STRING, allowNull: false },
    comments: { type: DataTypes.TEXT("medium") },
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
