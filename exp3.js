var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    if (request.url == "/admin") {
        response.writeHead(200, {"Content-Type": "htmlfile"});
        
        fs.readFile("CGPAcalculator.html", function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write("Error: File not found");
            } else {
                response.write(data);
            }
            response.end();
        });
        
    } else if (request.url == "/student") {
        response.writeHead(200, {"Content-Type": "htmlfile"});
      
        fs.readFile("exp-1.html", function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write("Error: File not found");
            } else {
                // Send the content of the file as the response
                response.write(data);
            }
            response.end();
        });
    } 
});

server.listen(3000);

console.log("Server running");