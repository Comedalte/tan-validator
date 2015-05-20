# tan-validator

This is a small validator that could be used in node and in browser with browserify.

### install

```bash
npm install tan-validator
```

### Usage

```js
var tanValidator = require("tan-validator")

tanValidator.isEmail("this@ismyemail.io") // true
tanValidator.isEmail("this@ismyemail.") // false
```

### Methods

- isEmail(str)
- equals(str|num, str|num)
- isUrl(str)
- isAlphaSwedish(str)
- isAlphaDash(str)
- isNumeric(str)
- isNumber(num)
- isInt(num)
- isLowercase(str)
- isUppercase(str)
- isString(str)
- isLength(str, min, [,max])
- isMin(num, min)
- isMax(num, max)
- isDate(str)
- isNumberDash(str)
- testRegex(str, regex)

### License

MIT