import { expect } from 'chai';
import { TOGGLE_MENU } from '../src/actionType';
import toggleMenu from '../src/action';

describe('action', () => {
  it('should toggle the menu state', () => {
    const expected = {
      type: TOGGLE_MENU,
      isOpen: true
    };
    expect(toggleMenu(true)).to.deep.equal(expected);
  });
});
