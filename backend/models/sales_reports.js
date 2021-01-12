const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "sales_reports",
    {
      group_by: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      display: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      filter_row_source: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      default: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "sales_reports",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "group_by" }],
        },
      ],
    }
  );
};
