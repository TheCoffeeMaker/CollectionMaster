const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    unit_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'order_details_status',
        key: 'id'
      }
    },
    date_allocated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    purchase_order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inventory_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "inventory_id",
        using: "BTREE",
        fields: [
          { name: "inventory_id" },
        ]
      },
      {
        name: "id_2",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_3",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_4",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_id_2",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "purchase_order_id",
        using: "BTREE",
        fields: [
          { name: "purchase_order_id" },
        ]
      },
      {
        name: "id_5",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_order_details_orders1_idx",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "fk_order_details_order_details_status1_idx",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
