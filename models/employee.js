const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const randomNumber = () => {
    return Math.floor(Math.random() * 100000);
};
class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: () => {
                return randomNumber();
            },
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "employee",
    }
);

module.exports = Employee;
