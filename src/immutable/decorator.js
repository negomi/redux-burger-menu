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

  const mapDispatchToProps = (dispatch) => {
    return {
      onStateChange: (newState) => {
        dispatch(toggleMenu(newState.isOpen, menuId));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent);
};

export default reduxBurgerMenu;
