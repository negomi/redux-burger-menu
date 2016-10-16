'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decorator = require('./src/decorator');

var _decorator2 = _interopRequireDefault(_decorator);

var _reducer = require('./src/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _action = require('./src/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  decorator: _decorator2.default,
  reducer: _reducer2.default,
  action: _action2.default
};