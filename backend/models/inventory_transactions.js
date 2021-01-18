const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "inventory_transactions",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      transaction_type: {
        type: DataTypes.TINYINT,
        allowNull: false,
        references: {
          model: "inventory_transaction_types",
          key: "id",
        },
      },
      transaction_created_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      transaction_modified_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      purchase_order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "purchase_orders",
          key: "id",
        },
      },
      customer_order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "orders",
          key: "id",
        },
      },
      comments: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "inventory_transactions",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "customer_order_id",
          using: "BTREE",
          fields: [{ name: "customer_order_id" }],
        },
        {
          name: "customer_order_id_2",
          using: "BTREE",
          fields: [{ name: "customer_order_id" }],
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
          name: "purchase_order_id",
          using: "BTREE",
          fields: [{ name: "purchase_order_id" }],
        },
        {
          name: "purchase_order_id_2",
          using: "BTREE",
          fields: [{ name: "purchase_order_id" }],
        },
        {
          name: "transaction_type",
          using: "BTREE",
          fields: [{ name: "transaction_type" }],
        },
      ],
    }
  );
};
