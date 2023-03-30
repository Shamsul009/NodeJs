//Global Object & Module System
// const path = require('node:path');

// const myPath = 'H:\\NodeJs\\index.js';
// console.log(path.basename(myPath));



// const fs = require('fs');
// fs.writeFileSync('myFile.txt','Hello');

const EventEmitter = require('events');
//const { emit } = require('process');
const emitt = new EventEmitter();

emitt.on('bell',({period,madam})=>{
    console.log(`Its time to run because ${period} end and ${madam} start walking`);
})

emitt.emit('bell',{
    period : '2nd',
    madam : 'Mrs.Y'
});









