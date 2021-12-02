/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return students[i].score
     }
  } if (name !== students.name) {
    return null
  }
}

module.exports = findStudentScoreByName;
