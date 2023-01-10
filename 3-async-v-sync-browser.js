// synchronous browser js operation
// console.log('first task')
// console.time()
// for (let i=0; i<10000000; i++){
//     const h3 = document.querySelector('h3')
//     h3.textContent = `Hey, everyone is waiting on me`
// }
// console.timeEnd()
// console.log('next task')

// asynchronous browser js operation
console.log('first task')
setTimeout(() => {
    for (let i=0; i<10000000; i++){
        const h3 = document.querySelector('h3')
        h3.textContent = `Hey, everyone is waiting on me`
    }
    console.log('second task')
},0) 
//uses the set timeout to set the time taken to perform the 
// second task(the more time consuming task) to zero (offloads it)
// and then move on the next task

console.log('next task')