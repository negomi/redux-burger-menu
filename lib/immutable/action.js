'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOGGLE_MENU = exports.TOGGLE_MENU = 'TOGGLE_MENU';

var toggleMenu = function toggleMenu() {
  var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var menuId = arguments[1];

  return {
    type: TOGGLE_MENU,
    payload: menuId ? { isOpen: isOpen, menuId: menuId } : { isOpen: isOpen }
  };
};

exports.default = toggleMenu;