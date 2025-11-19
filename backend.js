// const http = require('http');
// const fs = require("fs");
// const path = require("path");
// const querystring = require("querystring");
// const server = http.createServer((req,res) =>{
//     if(req.url === '/' && req.method === 'GET'){
//         const filePath = path.join(__dirname, 'public', 'index.html');
//         console.log(filePath);
//         fs.readFile(filePath, (err, data)=>{
//             if(err){
//                 res.writeHead(500, {'Content-Type':'text/plain'});
//                 res.end('Internal Server Error');
//             }else{
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.end(data);
//             }
//         });
//     }
//     else if(req.url === '/contact' && req.method === 'POST'){
//         let body = '';
//         // collecting incoming data
//         req.on('data', (chunk) =>{
//             body += chunk.toString();
//         });
//         req.on("end",()=>{
//             const parsedData = querystring.parse(body);
//             console.log("Form Received:",parsedData);
//             res.writeHead(200, {'Content-Type':'text/plain'});
//             res.end(  `form data received successfully.
//                 Thank You.
//                 Username:${parsedData.username},
//                 Password:${parsedData.password}`);
//         })
//     }
//     else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = querystring.parse(body);

      // Example: log form data
      console.log("Form Submitted:", data);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <h1>Form Received</h1>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Message: ${data.message}</p>
        <a href="/">Back</a>
      `);
    });

    return;
  }

  // Serve static files (HTML, CSS)
  else if( req.method === "GET" ) {
    let filePath = "./public" + (req.url === "/" ? "/index.html" : req.url);
  let ext = path.extname(filePath);

  const mime = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json"
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    res.writeHead(200, { "Content-Type": mime[ext] || "text/plain" });
    res.end(data);
  });
  }
  else{
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(5000, () => console.log("Server running at http://localhost:5000"));