var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// var bobble = require('bobble');
// var logger = new bobble();
// logger.log("Log this to console");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);


// --------------------- Docker --------------------
// docker build -t "myapp" .
// docker run -it --rm -p 8090:8888 myapp
// 192.168.99.100:8090

// restify
// ORM
// express
