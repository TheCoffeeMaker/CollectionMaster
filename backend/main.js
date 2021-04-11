const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const GenericController = require("./Router");
const port = 4000;

function get_models() {
  const Sequelize = require("sequelize");
  const initModels = require("./models/init-models").initModels;
  const sequelize = new Sequelize("northwind", "root", "root", {
    dialect: "mysql",
  });
  const models = initModels(sequelize);
  return models;
}

const { customers, employees, invoices, orders, products, suppliers } = get_models()

app.use(bodyParser.json());

app.use("/customers", GenericController(customers));
app.use("/employees", GenericController(employees));
app.use("/invoices", GenericController(invoices));
app.use("/orders", GenericController(orders));
app.use("/products", GenericController(products));
app.use("/suppliers", GenericController(suppliers));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
