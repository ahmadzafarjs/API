const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  
  },
  prefession: {
    type: String,
    required: true
  
  },
})

module.exports = mongoose.model("Data", dataSchema)