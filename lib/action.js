'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOGGLE_MENU = exports.TOGGLE_MENU = 'TOGGLE_MENU';

var toggleMenu = function toggleMenu() {
  var isOpen = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

  return { type: TOGGLE_MENU, isOpen: isOpen };
};

exports.default = toggleMenu;