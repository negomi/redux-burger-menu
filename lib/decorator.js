'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxBurgerMenu = function reduxBurgerMenu(ComposedComponent) {
  var mapStateToProps = function mapStateToProps(state) {
    return {
      isOpen: state.burgerMenu.isOpen
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onStateChange: function onStateChange(newState) {
        dispatch((0, _action2.default)(newState.isOpen));
      }
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComposedComponent);
};

exports.default = reduxBurgerMenu;