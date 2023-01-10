// using an imported node module example
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

// no need to commit node modules to git
// when a project is cloned from git, running npm install will
// download all the packages in the packages.json file

// we can install a node module as a single dependency or a dev dependency
// to install as a dev dependency, run npm i <package name> --D or --save-dev
// we typically install  modules as dev dependencies when we don't need them in production
// e.g. testing packages, linting, etc.

