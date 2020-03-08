//using connect with basic web server
var connect=require('connect');
var http=require('http');

var app=connect();


function doFirst(request,response,next)
{
    console.log('howdy');
    next();
    //if we don't use this next function
    // then it wouldn't go the next stack aka doSecond fn
}
function doSecond(request,response,next)
{
    console.log('i am fine');
    next();
}

app.use(doFirst);
app.use(doSecond);
/*there is some second benifit of using app.use()
that we can define paths for different functions
CHECK THIS OUT
 */
function profile(request,response)
{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("watching DaVinci's demons");
    console.log("watching DaVinci's demons");
    response.end();
}

function forum(request,response)
{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("wass happening!");
    console.log("watching nothing");
    response.end();
}

app.use('/profile',profile);
app.use('/forum',forum);



//now use createServer as we learnt previously
//this would go to app and ask how should i handle the request

http.createServer(app).listen(8080);
console.log('Server is now running ....');
