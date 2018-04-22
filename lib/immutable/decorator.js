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
    var burgerMenu = state.burgerMenu || state.get('burgerMenu');
    return {
      isOpen: menuId ? burgerMenu.has(menuId) ? burgerMenu.getIn([menuId, 'isOpen']) : false : burgerMenu.get('isOpen') ? burgerMenu.get('isOpen') : false
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
      onStateChange: function onStateChange(newState) {
        dispatch((0, _action2.default)(newState.isOpen, menuId));
        if (typeof props.onStateChange === 'function') {
          props.onStateChange(newState);
        }
      }
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComposedComponent);
};

exports.default = reduxBurgerMenu;