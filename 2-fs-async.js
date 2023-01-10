const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    // console.log(result)  //else block

    // else block: what to do with result instead of printing to console
    const first = result
    // save result in a variable for now


    // then read second file and save result
    readFile('./content/second.txt','utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const second = result

        // now that both results are saved, we can use writefile with both results

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }

                // now we can view final resutl
                console.log(result)
                console.log('done with this task')
            }
            )

    }
    )

    
})

console.log('starting the next task')


