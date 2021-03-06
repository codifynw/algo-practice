// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./kadanes");
const chai = require("chai");

it("Test Case #1", function () {
  chai
    .expect(
      program.kadanesAlgorithm([
        3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4,
      ])
    )
    .to.deep.equal(19);
});
