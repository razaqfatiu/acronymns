"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = require("chai");

var _mocha = require("mocha");

var _asyncRequest = _interopRequireDefault(require("async-request"));

(0, _mocha.describe)('Test Acronym endpoints', function () {
  (0, _mocha.describe)('GET Acronymns', function () {
    (0, _mocha.it)('Get the list of acronyms based on the query parameters', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _asyncRequest["default"])('http://localhost:8001/acronym?from=1&limit=10&search=?');

            case 3:
              res = _context.sent;
              // .expect(200)
              // .end((err, res) => {
              //   console.log('object');
              (0, _chai.expect)(res.statusCode).to.equal(200);
              (0, _chai.expect)(res.body).to.be.instanceOf(Object);
              (0, _chai.expect)(res.body).to.have.property('message');
              (0, _chai.expect)(res.body).to.have.property('data'); //   expect(res.body.data).to.be.instanceOf(Array);
              // });
              // done();

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              // done();
              console.log('ERROR+: ', _context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    })));
  });
});