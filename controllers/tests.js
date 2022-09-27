const User = require("../models/User");
const Test = require("../models/Tests");
const Student = require("../models/Student");

module.exports = {
    getTest: async (req, res) => {
        try {
            const test = await Test.findById(req.params.id);

            function shuffle(array) {
                let currentIndex = array.length,
                    randomIndex;

                while (currentIndex != 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex],
                        array[currentIndex],
                    ];
                }
                return array;
            }

            const randTest = shuffle(test.baseWords);
            const randChallenge = shuffle(test.challengeWords);
            res.render("./tests/test", {
                test: test,
                randTest: randTest,
                randChallenge: randChallenge,
                user: req.user,
            });
        } catch (err) {
            console.log(err);
            res.render("errors/404")
        }
    },

    getTestResults: async (req, res) => {
        try {
            const test = await Test.findById(req.params.id);
            let incorrect = [];
            for (let key in req.body) {
                if (key.toLowerCase() != req.body[key].toLowerCase()) {
                    let result = {
                        incorrectWord: req.body[key],
                        correctWord: key,
                    };
                    incorrect.push(result);
                }
            }
            let grade = Math.floor(((15 - incorrect.length) / 15) * 100);

            const student = await Student.findOne({ studentId: req.user.id });
            if (student) {
                student.reviewWords.push(...incorrect);
                student.test.push(test.title, grade);
                await student.save();
            } else {
                await Student.create({
                    studentId: req.user.id,
                    reviewWords: new Array(),
                    test: new Array(),
                });
            }

            res.render("./tests/results", {
                incorrect: incorrect,
                test: test,
                grade: grade,
            });
        } catch (err) {
            console.log(err);
            res.render("errors/404")
        }
    },
};
