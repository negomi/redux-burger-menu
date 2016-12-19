import { expect } from 'chai';
import toggleMenu, { TOGGLE_MENU } from '../src/action';

describe('action', () => {
  it('should return the correct default action', () => {
    expect(toggleMenu(true)).to.deep.equal({
      type: TOGGLE_MENU,
      payload: { isOpen: true }
    });
  });

  it('should return the correct action when passed a menuId', () => {
    expect(toggleMenu(true, '0')).to.deep.equal({
      type: TOGGLE_MENU,
      payload: { isOpen: true, menuId: '0' }
    });
  });
});
