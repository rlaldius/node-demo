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
