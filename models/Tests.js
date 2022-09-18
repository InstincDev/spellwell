const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  words: { 
    type: Array,
    of: String
  },  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Test", TestSchema);
