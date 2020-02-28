const express = require('express');
const app = express();

app.use('*', (req,res, next) => {
    res.send('<h1>Hello from node app!</h1><h2>did that just work?</h2>');
});

app.listen(4000, () => {
    console.log('App listening on port 4000');
});