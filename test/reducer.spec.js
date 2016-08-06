import { expect } from 'chai';
import { TOGGLE_MENU } from '../src/actionType';
import reducer from '../src/reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    const expected = [{
      isOpen: false
    }];
    expect(reducer(undefined, {})).to.deep.equal(expected);
  });

  it('should handle TOGGLE_MENU', () => {
    const action = {
      type: TOGGLE_MENU,
      isOpen: true
    };
    const expected = [{
      isOpen: true
    }];
    expect(reducer([], action)).to.deep.equal(expected);
  });
});
