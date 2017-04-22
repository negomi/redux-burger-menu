'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _action = require('./action');

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.fromJS)({ isOpen: false });
  var action = arguments[1];

  switch (action.type) {
    case _action.TOGGLE_MENU:
      var _action$payload = action.payload,
          isOpen = _action$payload.isOpen,
          menuId = _action$payload.menuId;

      return menuId ? state.setIn([menuId, 'isOpen'], isOpen) : state.set('isOpen', isOpen);
    default:
      return state;
  }
};

exports.default = reducer;