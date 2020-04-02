var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 3000;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(port);
console.log('Server running at Port 3000');
