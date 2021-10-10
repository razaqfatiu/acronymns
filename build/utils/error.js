"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = exports.ErrorHandler = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ErrorHandler = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ErrorHandler, _Error);

  var _super = _createSuper(ErrorHandler);

  function ErrorHandler(statusCode, message) {
    var _this;

    var isOperational = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    (0, _classCallCheck2["default"])(this, ErrorHandler);
    _this = _super.call(this);
    _this.statusCode = statusCode;
    _this.message = message;
    _this.isOperational = isOperational;
    Error.captureStackTrace((0, _assertThisInitialized2["default"])(_this), _this.constructor);
    return _this;
  }

  return ErrorHandler;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.ErrorHandler = ErrorHandler;

var handleError = function handleError(err, res) {
  var _err$statusCode = err.statusCode,
      statusCode = _err$statusCode === void 0 ? 500 : _err$statusCode,
      message = err.message;
  res.status(statusCode).json({
    status: 'error',
    statusCode: statusCode,
    message: message
  });
};

exports.handleError = handleError;