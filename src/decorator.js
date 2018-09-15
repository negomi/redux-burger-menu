import { connect } from 'react-redux';
import toggleMenu from './action';

const reduxBurgerMenu = (ComposedComponent, menuId) => {
  const mapStateToProps = ({ burgerMenu }) => ({
    isOpen: menuId
      ? burgerMenu.hasOwnProperty(menuId) ? burgerMenu[menuId].isOpen : false
      : burgerMenu.hasOwnProperty('isOpen') ? burgerMenu.isOpen : false
  });

  const mapDispatchToProps = (dispatch, props) => ({
    onStateChange: (newState) => {
      dispatch(toggleMenu(newState.isOpen, menuId));
      if (typeof props.onStateChange === 'function') {
        props.onStateChange(newState);
      }
    }
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    (stateProps, dispatchProps, ownProps) => ({
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      onStateChange: (newState) => {
        if (stateProps.isOpen !== newState.isOpen) {
          dispatchProps.onStateChange(newState);
        } else {
          if (typeof ownProps.onStateChange === 'function') {
            ownProps.onStateChange(newState);
          }
        }
      }
    })
  )(ComposedComponent);
};

export default reduxBurgerMenu;
