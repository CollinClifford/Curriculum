/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  let stud = {}
  for (i = 0; i < students.length; i++) {
    if (name === students[i].name) { 
      stud = students[i];
      return stud
    } 
  } if (name !== students.id) {
    return null
  }
}

module.exports = findStudentByName;
