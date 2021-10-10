"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _error = require("./error");

require('dotenv').config();

var auth = function auth(req, res, next) {
  try {
    var apiKey = req.headers.authorization;

    if (apiKey !== process.env.STATIC_API_KEY) {
      throw new _error.ErrorHandler(401, 'Unauthorized');
    }

    next();
  } catch (error) {
    next(error);
  }
};

var _default = auth;
exports["default"] = _default;