var http = require('http');
var fs = require('fs');

function send404Reeponse(response) {
	response.writeHead(404, {"Context-Type": 'text/plain'});
	response.write('Error 404: Page not found');
	response.end();
}

function onRequest(request, response) {

	if(request.method == 'GET' && request.url == '/'){

		response.writeHead(200, {"Context-Type": 'text/html'});
		fs.createReadStream('./Project.html').pipe(response);

	}else {

		send404Reeponse(response);

	}

}

var port = Number(process.env.PORT || 3000);

var PMagic = fs.readFileSync('./PMagic.js')

http.createServer(onRequest).listen(port);
console.log('My server is running....');