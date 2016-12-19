import { connect } from 'react-redux';
import toggleMenu from './action';

const reduxBurgerMenu = (ComposedComponent, menuId) => {
  const mapStateToProps = (state) => {
    const { burgerMenu } = state
    return {
      isOpen: menuId ? burgerMenu[menuId].isOpen : burgerMenu.isOpen
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
