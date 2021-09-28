"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _http = _interopRequireDefault(require("http"));

var port = process.env.PORT || 8001;

_app["default"].set('port', port);

var server = _http["default"].createServer(_app["default"]);

server.listen(port, function () {
  return console.log('Server started on port: ', port);
});