describe("validator", function() {

	var validator = require("../src/validator");

	it("test email", function() {
		expect(validator.isEmail("")).toBe(false);
		expect(validator.isEmail("helol@fvfg")).toBe(false);
		expect(validator.isEmail("helol.fvfg")).toBe(false);
		expect(validator.isEmail("helol.fv@fg")).toBe(false);
		expect(validator.isEmail("this@ismyemail.")).toBe(false);

		expect(validator.isEmail("helolfv@fg.dsd")).toBe(true);
		expect(validator.isEmail("a@ojda.com")).toBe(true);
		expect(validator.isEmail("this@ismyemail.io")).toBe(true);
	});

	it("test url", function() {
		expect(validator.isUrl("")).toBe(false);
		expect(validator.isUrl("helol@fvfg")).toBe(false);
		expect(validator.isUrl("helol.com.")).toBe(false);
		expect(validator.isUrl("helol.fv@fg")).toBe(false);

		expect(validator.isUrl("http://ojda.io")).toBe(true);
		expect(validator.isUrl("https://ojda.io")).toBe(true);
		expect(validator.isUrl("http://www.ojda.com")).toBe(true);
		expect(validator.isUrl("https://www.ojda.in")).toBe(true);
	});

	it("test equals", function() {
		expect(validator.equals("ta", "taa")).toBe(false);
		expect(validator.equals("12", 12)).toBe(false);
		expect(validator.equals(2, 2)).toBe(true);
		expect(validator.equals(["a"], ["a"])).toBe(false);
		expect(validator.equals("ffd", "ffd")).toBe(true);

	});


	it("test isAlphaSedish", function() {
		expect(validator.isAlphaSedish("t a")).toBe(true);
		expect(validator.isAlphaSedish("12")).toBe(false);
		expect(validator.isAlphaSedish(2)).toBe(false);
		expect(validator.isAlphaSedish(["a"])).toBe(false);
		expect(validator.isAlphaSedish("a_")).toBe(false);
		expect(validator.isAlphaSedish("-")).toBe(false);
		expect(validator.isAlphaSedish("öäåÖÅÄéè")).toBe(true);
	});

	it("test isNumeric", function() {
		expect(validator.isNumeric("12")).toBe(true);
		expect(validator.isNumeric(2)).toBe(true);
		expect(validator.isNumeric(["a"])).toBe(false);
		expect(validator.isNumeric("a_")).toBe(false);
		expect(validator.isNumeric(4.34)).toBe(true);
	});

	it("test isNumber", function() {
		expect(validator.isNumber("12")).toBe(false);
		expect(validator.isNumber(2)).toBe(true);
		expect(validator.isNumber(["a"])).toBe(false);
		expect(validator.isNumber("a_")).toBe(false);
		expect(validator.isNumber(4.34)).toBe(true);
	});

	it("test isInt", function() {
		expect(validator.isInt("12")).toBe(false);
		expect(validator.isInt(2)).toBe(true);
		expect(validator.isInt(["a"])).toBe(false);
		expect(validator.isInt(4.3)).toBe(false);
	});

	it("test isLowercase", function() {
		expect(validator.isLowercase("12")).toBe(true);
		expect(validator.isLowercase(2)).toBe(false);
		expect(validator.isLowercase(["a"])).toBe(false);
		expect(validator.isLowercase("fggf.fdg_fdg-sd")).toBe(true);
		expect(validator.isLowercase("fggf.fdAg_fdg-f")).toBe(false);
	});

	it("test isUppercase", function() {
		expect(validator.isUppercase("12")).toBe(true);
		expect(validator.isUppercase(2)).toBe(false);
		expect(validator.isUppercase(["a"])).toBe(false);
		expect(validator.isUppercase("fggf.fdg_fdg-sd")).toBe(false);
		expect(validator.isUppercase("SDF-_F")).toBe(true);
	});

	
	it("test isLength", function() {
		expect(validator.isLength("12", 2)).toBe(true);
		expect(validator.isLength("dffd", 4, 4)).toBe(true);
		expect(validator.isLength(2, 3)).toBe(false);
		expect(validator.isLength(["a"], 0)).toBe(false);
		expect(validator.isLength("fggf.fdg_fdg-sd", 3, 7)).toBe(false);
		expect(validator.isLength("fggf.fdAg_fdg-f", 33, 41)).toBe(false);
	});

	it("test isMin", function() {
		expect(validator.isMin("12", 2)).toBe(false);
		expect(validator.isMin(4, 4)).toBe(true);
		expect(validator.isMin(0, 0)).toBe(true);
		expect(validator.isMin(6, 4)).toBe(true);
		expect(validator.isMin(33, 41)).toBe(false);
	});

	it("test isMax", function() {
		expect(validator.isMax("12", 2)).toBe(false);
		expect(validator.isMax(4, 4)).toBe(true);
		expect(validator.isMax(0, 0)).toBe(true);
		expect(validator.isMax(6, 4)).toBe(false);
		expect(validator.isMax(33, 41)).toBe(true);
	});

	it("test isDate", function() {
		expect(validator.isDate(2)).toBe(false);
		expect(validator.isDate("2023-23-23")).toBe(false);
		expect(validator.isDate("2014-04-22")).toBe(true);
		expect(validator.isDate("2014-12-31")).toBe(true);
		expect(validator.isDate("2014-01-31")).toBe(true);
		expect(validator.isDate("2014-01-01")).toBe(true);
		expect(validator.isDate("1666-01-01")).toBe(true);
		expect(validator.isDate("1666-1-1")).toBe(true);
		expect(validator.isDate("1666-01-00")).toBe(false);
	});

	it("test isNumberDash", function() {
		expect(validator.isNumberDash(2)).toBe(false);
		expect(validator.isNumberDash("2023-23-23")).toBe(true);
		expect(validator.isNumberDash("2014-04_")).toBe(false);
		expect(validator.isNumberDash("2014-1s-31")).toBe(false);
		expect(validator.isNumberDash("2014- 1-31")).toBe(false);
	});


	it("test testRegex", function() {
		expect(validator.testRegex(2, /\d/i)).toBe(false);
		expect(validator.testRegex("312", /\d{1,4}/i)).toBe(true);
		expect(validator.testRegex("31322", /\d{1,4}/i)).toBe(true);
	});



	


});