import { expect } from 'chai';
import { fromJS } from 'immutable'
import { TOGGLE_MENU } from '../../src/immutable/action';
import reducer from '../../src/immutable/reducer';

describe('immutable reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(fromJS({isOpen: false}));
  });

  it('should handle TOGGLE_MENU', () => {
    expect(reducer(fromJS({}), {
        type: TOGGLE_MENU,
        payload: {
          isOpen: true
        }
      })
    ).to.deep.equal(fromJS({isOpen: true}));
  });

  it('should handle TOGGLE_MENU when passed a menuId', () => {
    expect(reducer(fromJS({}), {
        type: TOGGLE_MENU,
        payload: {
          isOpen: true,
          menuId: '0'
        }
      })
    ).to.deep.equal(fromJS({0: {isOpen: true}}));
  });
});
