/**
 * Created by kumars on 06/03/17.
 */

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.listen('3000');



