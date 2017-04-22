import { fromJS } from 'immutable'
import { TOGGLE_MENU } from './action';

const reducer = (state = fromJS({isOpen: false}), action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      const { isOpen, menuId } = action.payload
      return menuId
        ? state.setIn([menuId, 'isOpen'], isOpen)
        : state.set('isOpen', isOpen)
    default:
      return state;
  }
};

export default reducer;
