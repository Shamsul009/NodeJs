
const url = require('url');
const {StringDecoder} = require('string_decoder')
const handler ={};


handler.handleReqRes = (req,res)=>{
    const parseUrl = url.parse(req.url,true);
    const pathname = parseUrl.pathname;
    const trimPath = pathname.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let fullRes = '';

    req.on('data',(buffer)=>{
        fullRes+=decoder.write(buffer);
    });

    req.on('end',()=>{
        fullRes += decoder.end();
        console.log(fullRes);
        res.end('Data is finished');
    })
    
};

module.exports = handler;