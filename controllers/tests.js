const User = require("../models/User");
const Test = require("../models/Tests")

module.exports = {
  getTest: async (req, res) => {
    console.log(test.baseWords)
      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      try {
      const test = await Test.findById(req.params.id);
      
      const randTest = shuffle(test.baseWords)
      console.log(randTest)
      res.render("./tests/test", { test: test, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

};
