const http = require('http');

http.createServer(function(req, res){
	res.write("On the way to full stack Poulter");
	res.end();
}).listen(3000);

console.log('server is listenting');
