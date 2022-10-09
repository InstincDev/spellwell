const User = require("../models/User");
const Test = require("../models/Tests");
const Student = require("../models/Student")
const Parent = require("../models/Parent")

module.exports = {
  getParentProfile: async (req, res) => {
    try {
      let tests, child, childGrade
      let grades =[]
      let parent = await Parent.findOne({parentId: req.user.id})
      const teacher = await User.findOne({role: "teacher", classId: req.user.classId})
      if(teacher){
        tests = await Test.find({createdBy: teacher._id}).lean()
      }
      let students = await User.find({ role:"student", classId: req.user.classId });
      for(let s = 0; s< students.length; s++){
        if (students[s].id.slice(-6) == parent.childId){
          child = await User.find({_id: students[s].id})
          childGrade = await Student.find({studentId: students[s].id})
        } 
      }
      console.log(child[0].userName, childGrade)
      const selectedTest = await Test.findById(req.query.testId);
      if(selectedTest && childGrade !=0){
        for(let i = 0; i< childGrade[0].grades.length; i++){
          if( childGrade[0].grades[i].test == selectedTest.title){
            grades.push(childGrade[0].grades[i])
          }
        }
      }
      
      res.render("./parent/profile", { tests: tests, user: req.user, child:child, selectedTest: selectedTest,  testResults:grades, });
    } catch (err) {
      console.log(err);
      res.render("errors/404")
    }
  },

};
