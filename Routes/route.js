const express = require("express");
const router = express.Router();
const Item = require("../models/List");

router.get("/", (req, res) => {
  Item.find((err, items) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.json(items);
    }
  });
});

router.post("/", (req, res) => {
  const newItem = new Item(req.body);

  newItem
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(409).json(err.message);
    });
});

router.patch("/:ItemId", async (req, res) => {
  try {
    const Updated = await Item.updateOne(
      { _id: req.params.ItemId },
      { $set: { complete: req.body.complete } }
    );
    res.json(Updated);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const rmI = await Item.deleteOne({ _id: req.params._id });
    res.json(rmI);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
