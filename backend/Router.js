const express = require("express");
const genericController = require("./GenericController")

module.exports = (Collection) => {

  let router = express.Router();

  console.log('router collection', Collection)

  router.post("/", genericController(Collection).create);
  router.get("/", genericController(Collection).readMany);
  router.get("/:_id", genericController(Collection).readOne);
  router.put("/:_id", genericController(Collection).update);
  router.delete("/:_id", genericController(Collection).remove);

  return router;
};
