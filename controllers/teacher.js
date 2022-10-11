const User = require("../models/User");
const Test = require("../models/Tests");
const Student = require("../models/Student")

module.exports = {
  
    getTeacherProfile: async (req, res) => {
      try {
        let testResults = []
        selectTestResults = []
        const tests = await Test.find({createdBy:req.user.id}).lean()
        const selectedTest = await Test.findById(req.query.testId);
        const students = await User.find({role:"student", classId: req.user.classId})
         
        for(student of students){
          testResults.push(...await Student.find({studentId: student.id }))
        }
        
       
        
        res.render("./teacher/profile", { tests: tests, user: req.user, selectedTest: selectedTest, students: students, testResults: testResults,});
      } catch (err) {
        console.log(err);
        res.render("errors/404")
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
      res.redirect("/"+ req.user.role+"/profile");
    } catch (err) {
      console.log(err);
      res.render("errors/404")
    }
  },
};
