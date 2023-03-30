const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder')
const {handleReqRes} = require('./helpers')
const app ={};

app.config = {
    port : 3000,
};

app.createServer = ()=>{
    const serverCreate = http.createServer(app.handleReqRes);
    serverCreate.listen(app.config.port,()=>{
        console.log('Server is Running');
    })
};

app.handleReqRes = handleReqRes;

app.createServer();