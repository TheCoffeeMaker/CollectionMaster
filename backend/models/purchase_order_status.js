const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "purchase_order_status",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "purchase_order_status",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
