// Write your tests here!
const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution");

const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
];

describe("partitionStudentsByScore", () => {
  it("should return an array with two arrays in it.", () => {
    const actual = partitionStudentsByScore(students, "8");
    const expected = [
        [{ name: "Morgan Sutton", score: 7.4 }],
        [
          { name: "Leo Yeon-Joo", score: 8.9 },
          { name: "Natalee Vargas", score: 9.2 },
        ],
      ];
    expect(actual).to.eql(expected);
  });
  it("should return an array with all the students in it if they are all under or above the parameter", () => {
      const actual = partitionStudentsByScore(students, 6)
      expected = [
          [],
          [{ name: "Leo Yeon-Joo", score: 8.9 },
          { name: "Morgan Sutton", score: 7.4 },
          { name: "Natalee Vargas", score: 9.2 },
          ]
      ]
      expect(actual).to.eql(expected);
  });
  it("should return with two empty arrays if the student array is empty", () => {
    const actual = partitionStudentsByScore("8")
    expected = [[],[]];
    expect(actual).to.eql(expected);
  });
});