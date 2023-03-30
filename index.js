//Global Object & Module System
// const path = require('node:path');

// const myPath = 'H:\\NodeJs\\index.js';
// console.log(path.basename(myPath));



// const fs = require('fs');
// fs.writeFileSync('myFile.txt','Hello');

// const EventEmitter = require('events');
// //const { emit } = require('process');
// const emitt = new EventEmitter();

// emitt.on('bell',({period,madam})=>{
//     console.log(`Its time to run because ${period} end and ${madam} start walking`);
// })

// emitt.emit('bell',{
//     period : '2nd',
//     madam : 'Mrs.Y'
// });

//Server Create
const http = require('node:http');
const server = http.createServer((req,res)=>{
    if(req.url ==='/home'){
        res.write('Welcome');
        res.end();
    }
    else if(req.url ==='/aboutus'){
        res.write('welcome to about page');
        res.end();
    }
});

server.listen(4000);
console.log('connection on');









