"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authMiddleware = _interopRequireDefault(require("../utils/authMiddleware"));

var _acronymController = require("./acronymController");

var acronymRouter = _express["default"].Router();

acronymRouter.get('/acronym', _acronymController.getAcronymns);
acronymRouter.post('/acronym', _acronymController.newAcronym);
acronymRouter.put('/acronym/:acronym', _authMiddleware["default"], _acronymController.updateAcronym);
acronymRouter["delete"]('/acronym/:acronym', _authMiddleware["default"], _acronymController.deleteAcronym);
var _default = acronymRouter;
exports["default"] = _default;