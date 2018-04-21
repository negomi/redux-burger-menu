import { connect } from 'react-redux';
import toggleMenu from './action';

const reduxBurgerMenu = (ComposedComponent, menuId) => {
  const mapStateToProps = (state) => {
    const { burgerMenu } = state
    let isOpen;
    if (menuId) {
      isOpen = burgerMenu[menuId] ? burgerMenu[menuId].isOpen : false;
    } else {
      isOpen = burgerMenu.isOpen ? burgerMenu.isOpen : false;
    }
    return { isOpen };
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
