const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "orders",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "employees",
          key: "id",
        },
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "customers",
          key: "id",
        },
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      shipped_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      shipper_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "shippers",
          key: "id",
        },
      },
      ship_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ship_address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ship_city: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ship_state_province: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ship_zip_postal_code: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ship_country_region: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      shipping_fee: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0.0,
      },
      taxes: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0.0,
      },
      payment_type: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      paid_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tax_rate: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      },
      tax_status_id: {
        type: DataTypes.TINYINT,
        allowNull: true,
        references: {
          model: "orders_tax_status",
          key: "id",
        },
      },
      status_id: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
        references: {
          model: "orders_status",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "orders",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "customer_id",
          using: "BTREE",
          fields: [{ name: "customer_id" }],
        },
        {
          name: "customer_id_2",
          using: "BTREE",
          fields: [{ name: "customer_id" }],
        },
        {
          name: "employee_id",
          using: "BTREE",
          fields: [{ name: "employee_id" }],
        },
        {
          name: "employee_id_2",
          using: "BTREE",
          fields: [{ name: "employee_id" }],
        },
        {
          name: "id",
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "id_2",
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "shipper_id",
          using: "BTREE",
          fields: [{ name: "shipper_id" }],
        },
        {
          name: "shipper_id_2",
          using: "BTREE",
          fields: [{ name: "shipper_id" }],
        },
        {
          name: "id_3",
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "tax_status",
          using: "BTREE",
          fields: [{ name: "tax_status_id" }],
        },
        {
          name: "ship_zip_postal_code",
          using: "BTREE",
          fields: [{ name: "ship_zip_postal_code" }],
        },
        {
          name: "fk_orders_orders_status1",
          using: "BTREE",
          fields: [{ name: "status_id" }],
        },
      ],
    }
  );
};
