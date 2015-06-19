// Javascript strict mode
'use strict';

// Load express
var express = require('express');
var app = express();

// Load server
app.use(express.static('./app'));
app.listen(8080);
console.log('Server running at 8080 port');