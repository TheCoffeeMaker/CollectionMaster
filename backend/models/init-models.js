const DataTypes = require("sequelize").DataTypes;
const _customers = require("./customers");
const _employee_privileges = require("./employee_privileges");
const _employees = require("./employees");
const _inventory_transaction_types = require("./inventory_transaction_types");
const _inventory_transactions = require("./inventory_transactions");
const _invoices = require("./invoices");
const _order_details = require("./order_details");
const _order_details_status = require("./order_details_status");
const _orders = require("./orders");
const _orders_status = require("./orders_status");
const _orders_tax_status = require("./orders_tax_status");
const _privileges = require("./privileges");
const _products = require("./products");
const _purchase_order_details = require("./purchase_order_details");
const _purchase_order_status = require("./purchase_order_status");
const _purchase_orders = require("./purchase_orders");
const _sales_reports = require("./sales_reports");
const _shippers = require("./shippers");
const _strings = require("./strings");
const _suppliers = require("./suppliers");

function initModels(sequelize) {
  const customers = _customers(sequelize, DataTypes);
  const employee_privileges = _employee_privileges(sequelize, DataTypes);
  const employees = _employees(sequelize, DataTypes);
  const inventory_transaction_types = _inventory_transaction_types(
    sequelize,
    DataTypes
  );
  const inventory_transactions = _inventory_transactions(sequelize, DataTypes);
  const invoices = _invoices(sequelize, DataTypes);
  const order_details = _order_details(sequelize, DataTypes);
  const order_details_status = _order_details_status(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const orders_status = _orders_status(sequelize, DataTypes);
  const orders_tax_status = _orders_tax_status(sequelize, DataTypes);
  const privileges = _privileges(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const purchase_order_details = _purchase_order_details(sequelize, DataTypes);
  const purchase_order_status = _purchase_order_status(sequelize, DataTypes);
  const purchase_orders = _purchase_orders(sequelize, DataTypes);
  const sales_reports = _sales_reports(sequelize, DataTypes);
  const shippers = _shippers(sequelize, DataTypes);
  const strings = _strings(sequelize, DataTypes);
  const suppliers = _suppliers(sequelize, DataTypes);

  privileges.belongsToMany(employees, {
    through: employee_privileges,
    foreignKey: "privilege_id",
    otherKey: "employee_id",
  });
  employees.belongsToMany(privileges, {
    through: employee_privileges,
    foreignKey: "employee_id",
    otherKey: "privilege_id",
  });
  employee_privileges.belongsTo(employees, { foreignKey: "employee_id" });
  employees.hasMany(employee_privileges, { foreignKey: "employee_id" });
  employee_privileges.belongsTo(privileges, { foreignKey: "privilege_id" });
  privileges.hasMany(employee_privileges, { foreignKey: "privilege_id" });
  inventory_transactions.belongsTo(inventory_transaction_types, {
    foreignKey: "transaction_type",
  });
  inventory_transaction_types.hasMany(inventory_transactions, {
    foreignKey: "transaction_type",
  });
  inventory_transactions.belongsTo(products, { foreignKey: "product_id" });
  products.hasMany(inventory_transactions, { foreignKey: "product_id" });
  inventory_transactions.belongsTo(purchase_orders, {
    foreignKey: "purchase_order_id",
  });
  purchase_orders.hasMany(inventory_transactions, {
    foreignKey: "purchase_order_id",
  });
  inventory_transactions.belongsTo(orders, { foreignKey: "customer_order_id" });
  orders.hasMany(inventory_transactions, { foreignKey: "customer_order_id" });
  invoices.belongsTo(orders, { foreignKey: "order_id" });
  orders.hasMany(invoices, { foreignKey: "order_id" });
  order_details.belongsTo(orders, { foreignKey: "order_id" });
  orders.hasMany(order_details, { foreignKey: "order_id" });
  order_details.belongsTo(products, { foreignKey: "product_id" });
  products.hasMany(order_details, { foreignKey: "product_id" });
  order_details.belongsTo(order_details_status, { foreignKey: "status_id" });
  order_details_status.hasMany(order_details, { foreignKey: "status_id" });
  orders.belongsTo(employees, { foreignKey: "employee_id" });
  employees.hasMany(orders, { foreignKey: "employee_id" });
  orders.belongsTo(customers, { foreignKey: "customer_id" });
  customers.hasMany(orders, { foreignKey: "customer_id" });
  orders.belongsTo(shippers, { foreignKey: "shipper_id" });
  shippers.hasMany(orders, { foreignKey: "shipper_id" });
  orders.belongsTo(orders_tax_status, { foreignKey: "tax_status_id" });
  orders_tax_status.hasMany(orders, { foreignKey: "tax_status_id" });
  orders.belongsTo(orders_status, { foreignKey: "status_id" });
  orders_status.hasMany(orders, { foreignKey: "status_id" });
  purchase_order_details.belongsTo(purchase_orders, {
    foreignKey: "purchase_order_id",
  });
  purchase_orders.hasMany(purchase_order_details, {
    foreignKey: "purchase_order_id",
  });
  purchase_order_details.belongsTo(products, { foreignKey: "product_id" });
  products.hasMany(purchase_order_details, { foreignKey: "product_id" });
  purchase_order_details.belongsTo(inventory_transactions, {
    foreignKey: "inventory_id",
  });
  inventory_transactions.hasMany(purchase_order_details, {
    foreignKey: "inventory_id",
  });
  purchase_orders.belongsTo(suppliers, { foreignKey: "supplier_id" });
  suppliers.hasMany(purchase_orders, { foreignKey: "supplier_id" });
  purchase_orders.belongsTo(employees, { foreignKey: "created_by" });
  employees.hasMany(purchase_orders, { foreignKey: "created_by" });
  purchase_orders.belongsTo(purchase_order_status, { foreignKey: "status_id" });
  purchase_order_status.hasMany(purchase_orders, { foreignKey: "status_id" });

  return {
    customers,
    employee_privileges,
    employees,
    inventory_transaction_types,
    inventory_transactions,
    invoices,
    order_details,
    order_details_status,
    orders,
    orders_status,
    orders_tax_status,
    privileges,
    products,
    purchase_order_details,
    purchase_order_status,
    purchase_orders,
    sales_reports,
    shippers,
    strings,
    suppliers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
