// Write your tests here!
const findStudentScoreByName = require("../src/solution");
const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
describe("findStudentScoreByName", () => {
    it("should return the score that matches the students name", () => {
        const expected = 8.9;
        const actual = findStudentScoreByName(students, "Leo Yeon-Joo");
        expect(actual).to.equal(expected);
    });
  it("should return null if student doesn't exist", () => {
    const expected = null;
    const actual = findStudentScoreByName(students, "tommy")
    expect(actual).to.equal(expected);
  });
});

const expect = require("chai").expect;