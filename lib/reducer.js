'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var initialState = {
  isOpen: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _action.TOGGLE_MENU:
      return Object.assign({}, state, {
        isOpen: action.isOpen
      });
    default:
      return state;
  }
};

exports.default = reducer;