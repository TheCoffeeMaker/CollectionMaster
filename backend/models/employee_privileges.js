const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_privileges', {
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    privilege_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'privileges',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee_privileges',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_id" },
          { name: "privilege_id" },
        ]
      },
      {
        name: "employee_id",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "privilege_id",
        using: "BTREE",
        fields: [
          { name: "privilege_id" },
        ]
      },
      {
        name: "privilege_id_2",
        using: "BTREE",
        fields: [
          { name: "privilege_id" },
        ]
      },
    ]
  });
};
