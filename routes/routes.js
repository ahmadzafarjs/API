const express = require('express');
const router = express.Router();
const Model = require('../models/model');

// POST
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    profession: req.body.profession
  })
  try {
    const dataToSave = await data.save()
    res.statusCode(200).json(dataToSave)
  } catch (error) {
    res.statusCode(400).json({
      message:
        error.message
    })
  }
})
// GET All
router.get("/getall", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})
// GET One
router.get("/getone/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})
// UPDATE
router.patch("/update/:id", (req, res) => {
  res.send("Update API")
})
// DELETE
router.delete("/delete/:id", (req, res) => {
  res.send("Delete API")
})

module.exports = router