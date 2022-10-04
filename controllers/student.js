const User = require("../models/User");
const Test = require("../models/Tests");
const Student = require("../models/Student")

module.exports = {
  getStudentProfile: async (req, res) => {
    try {
      let tests
      let grades =[]
      const teacher = await User.findOne({role: "teacher", classId: req.user.classId})
      tests = await Test.find({createdBy: teacher._id}).lean()
      console.log(tests)
      const selectedTest = await Test.findById(req.query.testId);
       const student = await Student.find({studentId: req.user.id  }).lean()
      console.log(student)
      if(selectedTest && student !=0){
        for(let i = 0; i< student[0].grades.length; i++){
          if( student[0].grades[i].test == selectedTest.title){
            grades.push(student[0].grades[i])
          }
        }
      }
      console.log(grades)
      res.render("./student/profile", { tests: tests, user: req.user, selectedTest: selectedTest, grades: grades});
    } catch (err) {
      console.log(err);
      res.render("errors/404")
    }
  },

};
