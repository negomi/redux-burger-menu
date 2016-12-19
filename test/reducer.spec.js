import { expect } from 'chai';
import { TOGGLE_MENU } from '../src/action';
import reducer from '../src/reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({});
  });

  it('should handle TOGGLE_MENU', () => {
    expect(reducer({}, {
        type: TOGGLE_MENU,
        payload: {
          isOpen: true
        }
      })
    ).to.deep.equal({ isOpen: true });
  });

  it('should handle TOGGLE_MENU when passed a menuId', () => {
    expect(reducer({}, {
        type: TOGGLE_MENU,
        payload: {
          isOpen: true,
          menuId: '0'
        }
      })
    ).to.deep.equal({ '0': { isOpen: true }});
  });
});
