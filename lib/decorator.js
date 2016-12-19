'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxBurgerMenu = function reduxBurgerMenu(ComposedComponent, menuId) {
  var mapStateToProps = function mapStateToProps(state) {
    var burgerMenu = state.burgerMenu;

    var isOpen = void 0;
    if (menuId) {
      isOpen = burgerMenu[menuId] ? burgerMenu[menuId].isOpen : false;
    } else {
      isOpen = burgerMenu.isOpen ? burgerMenu.isOpen : false;
    }
    return { isOpen: isOpen };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onStateChange: function onStateChange(newState) {
        dispatch((0, _action2.default)(newState.isOpen, menuId));
      }
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComposedComponent);
};

exports.default = reduxBurgerMenu;