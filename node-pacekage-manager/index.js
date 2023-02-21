const lodash = require('lodash');

const myOddEventArray = lodash.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEventArray);