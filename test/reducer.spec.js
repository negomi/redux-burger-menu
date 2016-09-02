import { expect } from 'chai';
import { TOGGLE_MENU } from '../src/action';
import reducer from '../src/reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(
      {
        isOpen: false
      }
    );
  });

  it('should handle TOGGLE_MENU', () => {
    expect(
      reducer({}, {
        type: TOGGLE_MENU,
        isOpen: true
      })
    ).to.deep.equal(
      {
        isOpen: true
      }
    );
  });
});
