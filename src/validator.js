var emailValidator = require("email-validator");
var validUrl = require('valid-url');

var validator = {

	isEmail: function(str) {
		return emailValidator.validate(str);
	},

	equals: function(str, comp) {
		return  str===comp;
	},

	isUrl: function(str) {
		if (typeof validUrl.is_uri(str)=== "undefined")
			return false;
		return true;
	},

	isAlphaSwedish: function(str) {
		var re = /^[ a-zA-ZåäöÅÄÖéè]+$/i;
		return typeof str === "string" && re.test(str);
	},

	isAlphaDash: function(str) {
		var re = /^[ a-zA-ZåäöÅÄÖéè\-]+$/i;
		return re.test(str);
	},

	isNumeric: function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},

	isNumber: function(n) {
		return typeof n === "number" && !isNaN(parseFloat(n)) && isFinite(n);
	},

	isInt: function(value) {
		return typeof value === "number" && (parseFloat(value) == parseInt(value)) && !isNaN(value);
	},

	isLowercase: function(str) {
		return typeof str === "string" && str === str.toLowerCase();
	},

	isUppercase: function(str) {
		return typeof str === "string" && str === str.toUpperCase();
	},

	isString: function() {
		return typeof str === "string";
	},

	isLength: function(str, min, max) {
		if (typeof max == "undefined")
			return typeof str === "string" && parseInt(min) <= str.length;
		else 
			return typeof str === "string" && parseInt(min) <= str.length && parseInt(max) >= str.length;
	},


	isMin: function(number, comp) {
		comp = parseFloat(comp);
		return validator.isNumber(number) && number >= comp;
	},

	isMax: function(number, comp) {
		comp = parseFloat(comp);
		return validator.isNumber(number) && number <= comp;
	},

	isDate: function(str) {		
		var re = /^\d{4}[-/]\d{1,2}[-/]\d{1,2}$/i;
		if (re.test(str) && isNaN(str) && !isNaN(Date.parse(str)))
			return true;
		return false;

	},

	isNumberDash: function(str) {
		var re = /^[0-9\-]+$/i;
		return typeof str === "string" && re.test(str);
	},

	testRegex: function(str, regex) {
		return typeof str === "string" && regex.test(str);
	}

};

module.exports = validator;

