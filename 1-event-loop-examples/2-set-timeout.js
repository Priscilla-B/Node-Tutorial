
console.log('first')
setTimeout(() => {
    console.log('second')
},0) 
console.log('third')

// setTimeout is a callback and will be offloaded and run last