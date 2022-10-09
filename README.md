# SpellWell

SpellWell is a spelling application designed for students, teachers, and parents / guardians. 

## Usage

Users who login as students will be able to view, take, and get the results of spelling tests added by their teacher. Teachers will be able to create new tests, and access the results for all their students. In turn, Parents / Guardians will be able to access the test results of their child(ren).

For each test, the spelling word is spoken aloud, and the student inputs the correct spelling. Once submitted the test is graded and displayed along with the incorrect words.  Grades and attempts of each test are stored for review by the teacher and parent.

### Demo

Users may use these sample logins for a demonstration of the SpellWell app.


| Sample Email | Sample Password | Description  |
| :-------- | :------- | :------------------------- |
| sample@teacher.com| teacherPassword | Teacher Demo |
| sample@student.com| studentPassword| Student Demo |

---

## Install

`npm install`

---

## Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = (can be any port example: 3000)
  - DB_STRING = `your database URI`

---

## Run

`npm start`

---

## Optimizations

#### Student
- Add TTS buttons for spelling words on profile pg.

#### Teacher
- Add  '-' under Grades column for students who have not taken a selected test
- Show only the latest selected test taken per student on profile pg.
- Add Gradebook pg for all test taken by selected student

#### App
- Update format and styling
- Refactor (DRY) code
- Add Parent user
- Add review words as challenge words on subsequent tests
- Add spelling games
