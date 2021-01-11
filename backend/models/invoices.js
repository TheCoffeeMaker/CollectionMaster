const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoices', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    invoice_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tax: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    shipping: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    amount_due: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      defaultValue: 0.0000
    }
  }, {
    sequelize,
    tableName: 'invoices',
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
        name: "id_2",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_invoices_orders1_idx",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
