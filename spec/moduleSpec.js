describe("validator", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);

    var validator = require("../src/validator");
    console.log("test");
    expect(validator.isEmail()).toBe(true);
  });
});