# SpellWell


SpellWell is a spelling application designed for students, teachers, and parents / guardians. https://spellwell.cyclic.app/

## Usage

Users who login as students will be able to view, take, and get the results of spelling tests added by their teacher. Teachers will be able to create new tests, and access the results for all their students. Parents / Guardians will be able to access the test results of their child(ren).

Each test, the spelling word is spoken aloud, and the student inputs the correct spelling. Once submitted the test is graded and incorrect words are  displayed.  Grades and attempts of each test are stored for review.

### Screenshots


![Screenshot 2022-10-11 215552](https://user-images.githubusercontent.com/67307808/195239538-76e7c85a-8099-4b2a-99bb-e4dfb2ba5ec7.png)

![Screenshot 2022-10-11 215649](https://user-images.githubusercontent.com/67307808/195239541-834fa10f-02de-4fcf-938a-dcc4f177190d.png)

![Screenshot 2022-10-11 215426](https://user-images.githubusercontent.com/67307808/195239563-4c190fb1-ca93-4402-afe6-c883c26e187a.png)

![Screenshot 2022-10-11 215455](https://user-images.githubusercontent.com/67307808/195239571-c42f4298-72dd-4957-b958-a33a9279fe62.png)

![Screenshot 2022-10-11 215522](https://user-images.githubusercontent.com/67307808/195239582-5baa58e2-fde4-47ea-9389-95851bf5b90c.png)

### Demo

Watch this demo of SpellWell on YouTube - https://youtu.be/4nWote_Qz0g

Users may use these sample logins for a demonstration of the SpellWell app.
| Sample Email | Sample Password | Description  |
| :-------- | :------- | :------------------------- |
| sample@teacher.com| teacherPassword | Teacher Demo |
| sample@student.com| studentPassword| Student Demo |
| sample@parent.com| parentPassword| Parent Demo |

Students can be added to the sample teacher by using Class ID: 200.

---

## Install

`npm install`

---

### Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = (can be any port example: 3000)
  - DB_STRING = `your database URI`

---

### Run

`npm start`

---

## Optimizations

#### Teacher
- Add Gradebook pg for all test taken by selected student

#### App
- Update format and styling
- Refactor (DRY) code
- Add review words as challenge words on subsequent tests
- Add spelling games
