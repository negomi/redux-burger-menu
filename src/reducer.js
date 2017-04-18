import { TOGGLE_MENU } from './action';

const reducer = (state = {isOpen: false}, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      const { isOpen, menuId } = action.payload
      return menuId
        ? { ...state, [menuId]: { isOpen } }
        : { ...state, isOpen }
    default:
      return state;
  }
};

export default reducer;
