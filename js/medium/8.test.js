// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./8");
const chai = require("chai");

it("Medium 4, Test Case #1", function () {
  const input = [2, 1, 5, 2, 3, 3, 4];
  const expected = 2;
  const actual = program.firstDuplicateValue(input);
  chai.expect(actual).to.deep.equal(expected);
});
