const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const GenericController = require("./Router");
const port = process.env.PORT || 4000;
const DBUSERNAME = process.env.DBUSERNAME || 'root';
const DBPASSWORD = process.env.DBPASSWORD || 'root';

function get_models() {
  const Sequelize = require("sequelize");
  const initModels = require("./models/init-models").initModels;
  const sequelize = new Sequelize("northwind", DBUSERNAME, DBPASSWORD, {
    dialect: "mysql",
  });
  const models = initModels(sequelize);
  return models;
}

const { customers, employees, invoices, orders, products, suppliers } = get_models()
app.use(cors()); // allow all cors for now - until dev and prod env are created
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
