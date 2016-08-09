import { expect } from 'chai';
import { TOGGLE_MENU } from '../src/actionType';
import toggleMenu from '../src/action';

describe('action', () => {
  it('should toggle the menu state', () => {
    expect(
      toggleMenu(true)
    ).to.deep.equal({
      type: TOGGLE_MENU,
      isOpen: true
    });
  });
});
