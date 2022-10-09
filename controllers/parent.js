const User = require("../models/User");
const Test = require("../models/Tests");
const Student = require("../models/Student")
const Parent = require("../models/Parent")

module.exports = {
  getParentProfile: async (req, res) => {
    try {
      let tests
      let grades =[]
      let students = await User.find({ role:"student", classId: req.user.classId });
      console.log(students)
      
      
      const teacher = await User.findOne({role: "teacher", classId: req.user.classId})
      if(teacher){
        tests = await Test.find({createdBy: teacher._id}).lean()
      }
      
      const selectedTest = await Test.findById(req.query.testId);
      if(selectedTest && child !=0){
        for(let i = 0; i< child[0].grades.length; i++){
          if( child[0].grades[i].test == selectedTest.title){
            grades.push(child[0].grades[i])
          }
        }
      }
      
      res.render("./parent/profile", { tests: tests, user: req.user, selectedTest: selectedTest,  testResults:grades, });
    } catch (err) {
      console.log(err);
      res.render("errors/404")
    }
  },

};
