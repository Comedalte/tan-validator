var emailValidator = require("email-validator");
var validUrl = require('valid-url');

console.log("Validator");
var validator = {

	isEmail: function() {
		return emailValidator.validate("test@email.com");
	},

	equals: function(str, comp) {
		return  str==comp;
	},

	isUrl: validUrl.is_uri,

	isAlpha: function(str) {
		var re = /^[ a-zA-ZåäöÅÄÖé]+$/i;
		return re.test(str);
	},

	isAlphaDash: function(str) {
		var re = /^[ a-zA-ZåäöÅÄÖé\-]+$/i;
		return re.test(str);
	},

	isNumeric: function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},

	isInt: function(value) {
		return typeof value === "number" && (parseFloat(value) == parseInt(value)) && !isNaN(value);
	},

	isLowercase: function(str) {
		return typeof str === "string" && str === angular.lowercase(str.toLowerCase);
	},

	isString: function() {
		return typeof str === "string";
	},

	isLength: function(str, min, max) {
		if (typeof max == "undefined")
			return typeof str === "string" && parseInt(min) <= str.length;
		else 
			return typeof str === "string" && parseInt(min) <= str.length && parseInt(min) >= str.length;
	},


	isMin: function(number, comp) {
		comp = parseFloat(comp);
		return validator.isNumeric(number) && number >= comp;
	},

	isMax: function(number, comp) {
		comp = parseFloat(comp);
		return validator.isNumeric(number) && number <= comp;
	},

	isDate: function(str) {		
		var re = /^\d{2,4}[-/]\d{1,2}[-/]\d{1,2}$/i;
		return re.test(str);
	},

	isNumberDash: function(str) {
		var re = /^[0-9\-]+$/i;
		return typeof str === "string" && re.test(str);
	},

};

module.exports = validator;

