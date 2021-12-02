// Write your tests here!
const { expect } = require("chai");
const findStudentByName = require("../src/solution");

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

describe("findStudentByName", () => {
  it("should return the student whose name matches the name in the object.", () => {
    const actual = findStudentByName(students, "Leo Yeon-Joo");
    const expected = { name: "Leo Yeon-Joo", score: 8.9 }
    expect(actual).to.eql(expected);
  });
  it("should return null if student doesn't not exist", () => {
    const actual = findStudentByName(students, "Tom Bombadil")
    expect(actual).to.be.null;
  });
});
