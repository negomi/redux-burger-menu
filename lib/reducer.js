'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action = require('./action');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _action.TOGGLE_MENU:
      var _action$payload = action.payload,
          isOpen = _action$payload.isOpen,
          menuId = _action$payload.menuId;

      return menuId ? _extends({}, state, _defineProperty({}, menuId, { isOpen: isOpen })) : _extends({}, state, { isOpen: isOpen });
    default:
      return state;
  }
};

exports.default = reducer;