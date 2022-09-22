const User = require("../models/User");
const Test = require("../models/Tests")

module.exports = {
  
    getTeacherProfile: async (req, res) => {
      try {
        const tests = await Test.find().lean()
        const selectedTest = await Test.findById(req.query.testId);
        res.render("./teacher/profile", { tests: tests, user: req.user, selectedTest: selectedTest});
      } catch (err) {
        console.log(err);
      }
    },
  getAddTestForm: (req, res)=>{
    try{
        res.render("./teacher/add_test.ejs",{user: req.user} )
    } catch (err){
        console.error(err)
        res.render('errors/404')
    }
},
  createTest: async (req, res) => {
    try {
      console.log(req.body.baseWords, req.body.challenge)
        await Test.create({
        title: req.body.title,
        baseWords: req.body.baseWords,
        challengeWords: req.body.challenge,
        createdBy: req.user.id,
      });
      console.log("Test has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
