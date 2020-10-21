const express = require('express');
const app = express();

var os = require("os");
var hostname = os.hostname();

app.use('*', (req,res, next) => {
    res.send('<h1>Hello from node app!</h1><p><strong>Hostname:</strong> ' + hostname + '</p>');
});

app.listen(4000, () => {
    console.log('App listening on port 4000');
});