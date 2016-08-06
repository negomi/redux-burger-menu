import { connect } from 'react-redux';
import { toggleMenu } from './action';

const reduxBurgerMenu = (composedComponent) => {
  const mapStateToProps = (state) => {
    return {
      isOpen: state.isOpen
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onStateChange: (newState) => {
        dispatch(toggleMenu(newState.isOpen));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(composedComponent);
};

export default reduxBurgerMenu;
