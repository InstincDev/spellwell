const User = require("../models/User");
const Test = require("../models/Tests")

module.exports = {
  getTest: async (req, res) => {
    try {
      const test = await Test.findById(req.params.id);
      res.render("test.ejs", { test: test, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

};
