const User = require("../models/User");
const Test = require("../models/Tests")
const say = require('say')

module.exports = {
  getTest: async (req, res) => {
      try {
        const test = await Test.findById(req.params.id);
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
      
      const randTest = shuffle(test.baseWords);
      const randChallenge = shuffle(test.challengeWords);  
      res.render("./tests/test", { test: test, randTest: randTest, randChallenge: randChallenge, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  getTestResults: async (req, res) => {
    try{
      let incorrect = []
      if(!req.user.reviewWords){
        req.user.reviewWords = new Map()
      }
      for(let key in req.body){
          if(key.toLowerCase() != req.body[key].toLowerCase()){
            let result = {incorrectWord:req.body[key],correctWord:key}
            req.user.reviewWords.set(key, req.body[key])
            incorrect.push(result)
          }

      }
      await req.user.save()
      console.log(req.user.reviewWords)
      res.render("./tests/results", {incorrect: incorrect})
    }
    catch (err){
      console.log(err);
    }
  },
};
