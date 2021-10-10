"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAcronym = exports.updateAcronym = exports.newAcronym = exports.getAcronymns = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _error = require("../utils/error");

var _response = require("../utils/response");

var _acronymModel = _interopRequireDefault(require("./acronymModel"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getAcronymns = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, _req$query$from, from, _req$query$limit, limit, search, isInteger, checkSearch, acronyms, total;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, _req$query$from = _req$query.from, from = _req$query$from === void 0 ? 50 : _req$query$from, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit, search = _req$query.search;
            isInteger = new RegExp('^[1-9][0-9]*$');

            if (!(!isInteger.test(from) || !isInteger.test(limit))) {
              _context.next = 5;
              break;
            }

            throw new _error.ErrorHandler(400, 'Invalid parameters, from and limit should be a positive integer');

          case 5:
            limit = parseInt(limit);
            from = parseInt(from);
            checkSearch = {};

            if (search) {
              search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              checkSearch = {
                acronym: {
                  $regex: search,
                  $options: 'i'
                }
              };
              from = 1;
            }

            _context.next = 11;
            return _acronymModel["default"].find(checkSearch).limit(limit).skip((from - 1) * limit);

          case 11:
            acronyms = _context.sent;
            _context.t0 = Math;
            _context.next = 15;
            return _acronymModel["default"].count();

          case 15:
            _context.t1 = _context.sent;
            _context.t2 = limit;
            _context.t3 = _context.t1 / _context.t2;
            total = _context.t0.ceil.call(_context.t0, _context.t3);
            res.set('X-page-max', total);
            res.set('X-page', from);
            res.set('X-limit', limit);
            return _context.abrupt("return", res.status(200).json((0, _response.sampleResponse)('success', acronyms)));

          case 25:
            _context.prev = 25;
            _context.t4 = _context["catch"](0);
            next(_context.t4);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 25]]);
  }));

  return function getAcronymns(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAcronymns = getAcronymns;

var newAcronym = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, acronym, description, findAcronym, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, acronym = _req$body.acronym, description = _req$body.description;

            if (!(!acronym || !description)) {
              _context2.next = 4;
              break;
            }

            throw new _error.ErrorHandler(400, 'Invalid parameters, acronyms and description are required');

          case 4:
            _context2.next = 6;
            return _acronymModel["default"].findOne({
              acronym: acronym
            });

          case 6:
            findAcronym = _context2.sent;

            if (!findAcronym) {
              _context2.next = 9;
              break;
            }

            throw new _error.ErrorHandler(400, 'Acronym Exists');

          case 9:
            _context2.next = 11;
            return _acronymModel["default"].create(_objectSpread({}, req.body));

          case 11:
            data = _context2.sent;
            return _context2.abrupt("return", res.status(200).json((0, _response.sampleResponse)('success', data)));

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function newAcronym(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.newAcronym = newAcronym;

var updateAcronym = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var acronym, description, findAcronym, _updateAcronym;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            acronym = req.params.acronym;
            description = req.body.description;

            if (!(!acronym || !description)) {
              _context3.next = 5;
              break;
            }

            throw new _error.ErrorHandler(400, 'Invalid parameters, acronyms and description are required');

          case 5:
            _context3.next = 7;
            return _acronymModel["default"].findOne({
              acronym: acronym
            });

          case 7:
            findAcronym = _context3.sent;

            if (findAcronym) {
              _context3.next = 10;
              break;
            }

            throw new _error.ErrorHandler(404, 'Acronym not found');

          case 10:
            _context3.next = 12;
            return _acronymModel["default"].findOneAndUpdate({
              acronym: acronym
            }, _objectSpread({}, req.body), {
              "new": true
            });

          case 12:
            _updateAcronym = _context3.sent;
            return _context3.abrupt("return", res.status(200).json((0, _response.sampleResponse)('success', _updateAcronym)));

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));

  return function updateAcronym(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateAcronym = updateAcronym;

var deleteAcronym = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var acronym, deletedAcronym;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            acronym = req.params.acronym;

            if (acronym) {
              _context4.next = 4;
              break;
            }

            throw new _error.ErrorHandler(400, 'Acronmyns is required');

          case 4:
            _context4.next = 6;
            return _acronymModel["default"].findOneAndDelete({
              acronym: acronym
            });

          case 6:
            deletedAcronym = _context4.sent;
            return _context4.abrupt("return", res.status(200).json((0, _response.sampleResponse)('success', deletedAcronym)));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function deleteAcronym(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteAcronym = deleteAcronym;