export const TOGGLE_MENU = 'TOGGLE_MENU';

const toggleMenu = (isOpen = false, menuId) => {
  return {
    type: TOGGLE_MENU,
    payload: menuId ? { isOpen, menuId } : { isOpen }
  };
};

export default toggleMenu;
