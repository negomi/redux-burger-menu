import { connect } from 'react-redux';
import toggleMenu from './action';

const reduxBurgerMenu = (ComposedComponent, menuId) => {
  const mapStateToProps = (state) => {
    const burgerMenu = state.burgerMenu || state.get('burgerMenu')
    return {
      isOpen: menuId
        ? burgerMenu.has(menuId) ? burgerMenu.getIn([menuId, 'isOpen']) : false
        : burgerMenu.get('isOpen') ? burgerMenu.get('isOpen') : false
    };
  };

  const mapDispatchToProps = (dispatch, props) => {
    return {
      onStateChange: (newState) => {
        dispatch(toggleMenu(newState.isOpen, menuId));
        if (typeof props.onStateChange === 'function') {
          props.onStateChange(newState);
        }
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent);
};

export default reduxBurgerMenu;
