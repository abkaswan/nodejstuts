//TOPIC:creating a basic server:sending text onto a server
//call http module
var http=require('http');

function onRequest(request, response){
    console.log('a user made a request'+ request.url);
    response.writeHead(200,{'Context-Type':"text/plain"});
    response.write('here is some data');
    response.end();
}

//whenever a http requests for a page it also make another request for it's favicon also.

http.createServer(onRequest).listen(8888);
console.log('Server is now running ....');

//if you refresh the page then it's like another user made a request
//for that particular page