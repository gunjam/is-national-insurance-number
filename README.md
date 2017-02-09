# is-national-insurance-number

This module provides a function to validate UK National Insurance numbers.

It only validates strings, and does so strictly (must be upper case, contain no
spaces, dashes etc).

I recommend santising your input before validation.

## Installing
```
  npm install is-national-insurance-number --save
```

## Example usage
```javascript
const isValidNino = require('is-national-insurance-number');

isValidNino('AA111111A'); // true
isValidNino('thrasdfag'); // false
isValidNino(1); // throw TypeError - input must be String
```

Using provided sanitiser:
```javascript
const sanitiseNino = require('is-national-insurance-number/sanitise-nino');

sanitiseNino('aa 11 22 33 a'); // AA112233A
sanitiseNino('AA-11-22-33-A'); // AA112233A
sanitiseNino('aa112233A! 😺'); // AA112233A
```

Pull requests welcome!
