// var http = require('http');
// const port = 3000;
//  http.createServer((req,res) => {
//      if(req.method === 'GET' && req.url === '/') {
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('hello  from Home page(/ home route)');
//      }else if(req.method === 'GET' && req.url === '/about'){
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('about page  (/about route');
//      }else{
//         res.writeHead(404);
//         res.end('Not Found');
//      }
//  }).listen(port);


//  console.log(`Server is running on port http://localhost:${port}` )

// //events in node js
var eventEmitter = require('events');
var event = new eventEmitter();
// //event.on("eventName", callback)
// // event “eventName” ko suno (listen)
// event.on('sayHello', () => {
//     console.log('Hello, World!');
// });
// // event.emit("eventName")
// // event “eventName” ko trigger (run) karo
// event.emit('sayHello');


// event.on('datarecieved', (data)=>{
//    console.log('Data received successfully:', data);
// })

// event.emit('datarecieved', {message: 'Hello, World!'});
// event.emit('datarecieved', {message: 'Hello, World!'});


// // -------------------------------------------------
// // runs only single occurrence and second emit will be ignored
// event.once('datarecieved', (data)=>{
//    console.log('Data received successfully:', data);
// })

// event.emit('datarecieved', {message: 'Hello, World!'});
// event.emit('datarecieved', {message: 'Hello, World!'});



// const handler = ()=>{
//    console.log('event is called');
// }

// event.on('datarecieved', handler);

// event.emit('datarecieved', handler);
// // event.emit('datarecieved', {message: 'Hello, World!'});
// event.removeListener('datarecieved', handler);
// event.emit('datarecieved', handler);

// // -------------------------------------------------

var http = require('http');
var server = http.createServer();
server.on('request', (req, res)=>{
   res.end('Request received!');
});

server.listen(3000, ()=>{
   console.log('Server is listening on port 3000');
});
// server.emit('request');



// // -------------------------------------------------
// const EventEmitter = require('events');
// const uploader = new EventEmitter();

// // Step 1: Register listeners
// uploader.on('upload-start', (file) => {
//   console.log('Started uploading:', file.name);
// });

// uploader.on('upload-progress', (percent) => {
//   console.log(`Progress: ${percent}%`);
// });

// uploader.on('upload-complete', (file) => {
//   console.log('Upload completed:', file.name);
// });

// // Step 2: Simulate upload
// function uploadFile(file) {
//   uploader.emit('upload-start', file);

//   let progress = 0;
//   let interval = setInterval(() => {
//     progress += 20;

//     uploader.emit('upload-progress', progress);

//     if (progress === 100) {
//       clearInterval(interval);
//       uploader.emit('upload-complete', file);
//     }
//   }, 500);
// }

// // Start
// uploadFile({ name: "photo.png" });


// // -------------------------------------------------


// const EventEmitter = require('events');
// const chat = new EventEmitter();

// // Listener 1
// chat.on('message', (user, msg) => {
//   console.log(`${user}: ${msg}`);
// });

// // Listener 2 (logging separately)
// chat.on('message', (user, msg) => {
//   console.log(`Log: ${msg} from ${user}`);
// });

// // Emit events (new messages)
// chat.emit('message', 'Alice', 'Hello!');
// chat.emit('message', 'Bob', 'Hi Alice!');


// // utillls concept
// var fs = require('fs')
// var  utill = require('util');
// const readFile = utill.promisify(fs.readFile);
// readFile('index.js','utf8')
// .then((data)=>{
//    console.log(data);
// })
// .catch((err)=>{
//    console.error('Error reading file:', err);
// });



// // utills.callback-------------------------------------------------
// const fs = require('fs');
// const util = require('util');   
// async function hello(){
//   return "hello world";
// }

// const cbHello = util.callbackify(hello);

// cbHello((err, result)=>{  
//     if(err) throw err;
//     console.log(result);
// });



// // utills.deprecated-------------------------------------------------
// const fs = require('fs');
// const util = require('util');


// const deprecatedfun = util.deprecate(()=>{
//   console.log('This is old func.');

// },'deprecatedfun is deprecated please use newfun instead.');

// deprecatedfun();


// // utills.format-------------------------------------------------
// const util = require('util');
// const name = 'John';
// const age = 30;
// const formattedString = util.format('My name is %s and I am %d years old.', name, age);
// console.log(formattedString);

// // %j - JSON representation
// // %o - Object representation
// // %d - Number (integer)
// // %f - Number (floating point)
// // %s - String
// // %% - Single percent sign (%)


// // utills.inspect-------------------------------------------------
// const util = require('util');
// const obj = {name: 'Alice', age: 25, address: {city: 'Wonderland', zip: '12345'}};
// const inspectedString = util.inspect(obj, { depth: null, colors: true});
// console.log(inspectedString);


// // url -------------------------------------------------

// // Create and parse URL
// const myUrl = new URL('https://example.com:8080/path/page?name=John&age=25#top');

// // Access parts of the URL
// console.log(myUrl.protocol);    // 'https:'
// console.log(myUrl.hostname);    // 'example.com'
// console.log(myUrl.port);        // '8080'
// console.log(myUrl.pathname);    // '/path/page'
// console.log(myUrl.hash);        // '#top'

// // Query parameters
// console.log(myUrl.searchParams.get('name')); // 'John'

// // Add a query param
// myUrl.searchParams.append('city', 'London');

// console.log(myUrl.toString());
// // https://example.com:8080/path/page?name=John&age=25&city=London#top



// // //query string -------------------------------------------------
// const querystring = require('querystring');

// // Parse a query string into an object
// const parsed = querystring.parse('name=John&age=30&city=New+York');
// console.log(parsed); // { name: 'John', age: '30', city: 'New York' }

