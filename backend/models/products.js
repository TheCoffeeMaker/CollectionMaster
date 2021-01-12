const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "products",
    {
      supplier_ids: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_code: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      product_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      standard_cost: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0.0,
      },
      list_price: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
        defaultValue: 0.0,
      },
      reorder_level: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      target_level: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quantity_per_unit: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      discontinued: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      minimum_reorder_quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      attachments: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "products",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "product_code",
          using: "BTREE",
          fields: [{ name: "product_code" }],
        },
      ],
    }
  );
};
