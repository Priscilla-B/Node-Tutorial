const {readFile} = require('fs')

console.log('started a first task') //runs first

// check the file path
readFile('../content/first.txt','utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
}) // callback function - runs last

console.log('starting new task') // runs second

// the idea is that when callbacks are received, they're first registered
// and then executed after all immediate commands are executed 