function ControllerMethods(Collection) {
    // ======
    // Create
    // ======
    const create = (req, res) => {
      const newEntry = req.body;
      Collection.create(newEntry, (e, newEntry) => {
        if (e) {
          console.log(e);
          res.sendStatus(500);
        } else {
          res.send(newEntry);
        }
      });
    };
  
    // =========
    // Read many
    // =========
    const readMany = (req, res) => {
      Collection.findAll().then((col) => {
        res.send(col);
        if (col == null) {
          return;
        }
      });
    };
  
    // ========
    // Read one
    // ========
    const readOne = (req, res) => {
      Collection.findByPk(req.params._id).then((item) => {
        if (item !== null) {
          res.status(200).send(item);
        } else {
          res.status(500).send("Item missing");
        }
      });
    };
  
    // ======
    // Update
    // ======
    const update = (req, res) => {
      const changes = req.body.changes;
  
      Collection.findByPk(req.params._id).then((item) => {
        if (item !== null) {
          item.update(changes).then((instance) => {
            res.status(200).send("Item with id " + instance.id + " was updated");
          });
        } else {
          res.status(500);
        }
      });
    };
  
    // ======
    // Remove
    // ======
    const remove = (req, res) => {
      Collection.destroy({ _id: req.params._id }, (e) => {
        if (e) res.status(500).send(e);
        else res.sendStatus(200);
      });
    };

    return {
        create,
        readMany,
        readOne,
        update,
        remove
    }
};

module.exports = ControllerMethods;