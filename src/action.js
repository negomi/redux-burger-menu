import { TOGGLE_MENU } from './actionType';

const toggleMenu = (isOpen = false) => {
  return { type: TOGGLE_MENU, isOpen };
};

export default toggleMenu;
