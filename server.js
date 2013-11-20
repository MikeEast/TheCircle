var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.createReadStream('index.html', {
        'bufferSize': 4*1024
    }).pipe(res);
}).listen(process.env.PORT, process.env.IP);