var express = require ('express');
var server = server();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root:__dirname});
});

server.listen(port, function(){
  console.log('Now listenting on port...', port);
});
