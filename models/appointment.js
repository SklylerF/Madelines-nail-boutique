//still working on connection the appointments to the employees name ---------------------------------------
const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/connection");

class Appointment extends Model {}

const randomNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: () => {
        return randomNumber();
      },
      primaryKey: true,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_phone: {
      type: DataTypes.NUMERIC,
      allowNull: false,
      validate: {
        notNull: true,
        isNumeric: true,
        len: [10, 10],
      },
    },
    customer_email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    service_requested: {
      type: DataTypes.STRING,
      allowNull: true, //=====================CHANGE THIS BACK TO FALSE ONCE SERVICES ARE DONE
    },
    questions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "appointment",
  }
);

module.exports = Appointment;
