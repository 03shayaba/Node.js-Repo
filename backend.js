const http = require('http');
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const server = http.createServer((req,res) =>{
    if(req.url === '/' && req.method === 'GET'){
        const filePath = path.join(__dirname, 'public', 'index.html');
        console.log(filePath);
        fs.readFile(filePath, (err, data)=>{
            if(err){
                res.writeHead(500, {'Content-Type':'text/plain'});
                res.end('Internal Server Error');
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
        });
    }
    else if(req.url === '/contact' && req.method === 'POST'){
        let body = '';
        // collecting incoming data
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on("end",()=>{
            const parsedData = querystring.parse(body);
            console.log("Form Received:",parsedData);
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.end(  `form data received successfully.
                Thank You.
                Username:${parsedData.username},
                Password:${parsedData.password}`);
        })
    }
    else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
