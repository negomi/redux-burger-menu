import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import reducer from '../src/reducer.js';
import decorator from '../src/decorator.js';

describe('decorator', () => {
  const Menu = () => <div />;
  const ReduxBurgerMenu = decorator(Menu);
  const makeStore = (initialState = {}) => createStore(combineReducers({
    burgerMenu: reducer
  }), { burgerMenu: initialState });

  it('should return a function', () => {
    expect(ReduxBurgerMenu).to.be.a('function');
  });

  it('should render without error', () => {
    const store = makeStore();
    expect(() => {
      shallow(
        <Provider store={store}>
          <ReduxBurgerMenu />
        </Provider>
      );
    }).not.to.throw();
  });

  describe('inner component', () => {
    const store = makeStore({ isOpen: false });
    const wrapper = mount(
      <Provider store={store}>
        <ReduxBurgerMenu />
      </Provider>
    );
    const inner = wrapper.find(Menu);

    it('should receive correct props', () => {
      expect(inner.props().isOpen).to.equal(false);
      expect(inner.props().onStateChange).to.be.a('function');
    });
  });
});
