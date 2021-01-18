const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "purchase_order_details",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      purchase_order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "purchase_orders",
          key: "id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "products",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.DECIMAL(18, 4),
        allowNull: false,
      },
      unit_cost: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      date_received: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      posted_to_inventory: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      inventory_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "inventory_transactions",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "purchase_order_details",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "id",
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "inventory_id",
          using: "BTREE",
          fields: [{ name: "inventory_id" }],
        },
        {
          name: "inventory_id_2",
          using: "BTREE",
          fields: [{ name: "inventory_id" }],
        },
        {
          name: "purchase_order_id",
          using: "BTREE",
          fields: [{ name: "purchase_order_id" }],
        },
        {
          name: "product_id",
          using: "BTREE",
          fields: [{ name: "product_id" }],
        },
        {
          name: "product_id_2",
          using: "BTREE",
          fields: [{ name: "product_id" }],
        },
        {
          name: "purchase_order_id_2",
          using: "BTREE",
          fields: [{ name: "purchase_order_id" }],
        },
      ],
    }
  );
};
