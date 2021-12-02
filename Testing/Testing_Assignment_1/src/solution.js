/*
  Write a function that separates students into two buckets based on a given score. 
  The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let highArray = [];
  let lowArray = [];
  let totalArray = [];
  if (students.length === 0) {
    totalArray = [lowArray, highArray]
  }
  for (let i = 0; i < students.length; i++) {
     if (students[i].score > score) {
      highArray.push(students[i])
    } else if (students[i].score < score) {
      lowArray.push(students[i])
    }
    totalArray = [lowArray, highArray]
  }
  return totalArray
}


module.exports = partitionStudentsByScore;
