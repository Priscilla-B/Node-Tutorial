// modules

const names = require('./1-names')
// equivalent of import in python
console.log(names)

const sayHi = require('./1-utils')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)