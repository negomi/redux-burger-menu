import { TOGGLE_MENU } from './actionType';

const initialState = [
  {
    isOpen: false
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return [
        ...state,
        {
          isOpen: action.isOpen
        }
      ];
    default:
      return state;
  }
};

export default reducer;
