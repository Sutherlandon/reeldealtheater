var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/webroot'));
app.listen(8080);
