const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const randomNumber = () => {
    return Math.floor(Math.random() * 100000000);
};

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: () => {
                return randomNumber();
            },
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
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
