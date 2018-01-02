var http = require('http');


var handler = function(req,res){
 console.log('server is responding');
 res.writeHead(200);
 res.end('bye..');
 
};

http.createServer(handler).listen(3000);

console.log('server is running...');





