const express = require('express');
const path = require('path');
const http = require('http');
const api = require('./api');
const app = express();

const port = process.env.PORT || 3000;

app.set('port', port);
app.use('/back', api);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function() {
    console.log(`API running on localhost:${port}`)
});