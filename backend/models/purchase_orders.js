const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'suppliers',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    submitted_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'purchase_order_status',
        key: 'id'
      }
    },
    expected_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shipping_fee: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    taxes: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payment_amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    approved_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    submitted_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'purchase_orders',
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
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "status_id",
        using: "BTREE",
        fields: [
          { name: "status_id" },
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
        name: "supplier_id",
        using: "BTREE",
        fields: [
          { name: "supplier_id" },
        ]
      },
      {
        name: "supplier_id_2",
        using: "BTREE",
        fields: [
          { name: "supplier_id" },
        ]
      },
    ]
  });
};
