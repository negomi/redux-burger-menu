'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, function (stateProps, dispatchProps, ownProps) {
    return _extends({}, stateProps, dispatchProps, ownProps, {
      onStateChange: function onStateChange(newState) {
        if (stateProps.isOpen !== newState.isOpen) {
          dispatchProps.onStateChange(newState);
        } else {
          if (typeof ownProps.onStateChange === 'function') {
            ownProps.onStateChange(newState);
          }
        }
      }
    });
  })(ComposedComponent);
};

exports.default = reduxBurgerMenu;