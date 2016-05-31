var fs = require('fs');
var path = require('path');
var template = fs.readFileSync( __dirname + "/template.tpl","utf-8");
module.exports = template;