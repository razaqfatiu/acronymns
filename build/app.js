"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _error = require("./utils/error");

var _acronymRoute = _interopRequireDefault(require("./acronyms/acronymRoute"));

var db = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var conn;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(_config["default"].db);

          case 3:
            conn = _context.sent;
            return _context.abrupt("return", console.log('DB Connected'));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('DB Error', _context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function db() {
    return _ref.apply(this, arguments);
  };
}();

db();
process.on('uncaughtException', function (err) {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION!  Shutting down...');
  process.exit(0);
});
var app = (0, _express["default"])();
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use('/', _acronymRoute["default"]);
app.use(function (err, req, res, next) {
  (0, _error.handleError)(err, res);
});
var _default = app;
exports["default"] = _default;