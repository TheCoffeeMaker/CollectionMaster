const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const GenericController = require('./GenericController')
const port = 4000

function get_models() {
    const Sequelize = require("sequelize");
    const initModels = require("./models/init-models").initModels;
    var sequelize = new Sequelize("northwind", "root", "root", { dialect: 'mysql' });
    var models = initModels(sequelize);
    return models
}

let models = get_models()
let customers = models.customers
let employees = models.employees
let invoices = models.invoices
let orders = models.orders
let products = models.products
let suppliers = models.suppliers

app.use(bodyParser.json())

app.use('/customers', GenericController(customers))
app.use('/employees', GenericController(employees))
app.use('/invoices', GenericController(invoices))
app.use('/orders', GenericController(orders))
app.use('/products', GenericController(products))
app.use('/suppliers', GenericController(suppliers))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})