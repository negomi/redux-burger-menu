import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { slide as Menu } from 'react-burger-menu';
import reducer from '../src/reducer.js';
import decorator from '../src/decorator.js';

describe('decorator', () => {
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
    const toggleAction = {type: 'TOGGLE_MENU', payload: {isOpen: true}};
    let store;
    let wrapper;
    let inner;
    let dispatchSpy;
    let onStateChange;

    beforeEach(() => {
      store = makeStore({ isOpen: false });
      dispatchSpy = sinon.spy(store, 'dispatch');
      onStateChange = sinon.spy();
      wrapper = mount(
        <Provider store={store}>
          <ReduxBurgerMenu onStateChange={onStateChange} />
        </Provider>
      );
      inner = wrapper.find(Menu);
    });

    it('should receive correct props', () => {
      expect(inner.props().isOpen).to.equal(false);
      expect(inner.props().onStateChange).to.be.a('function');
    });

    it('should retain any existing onStateChange callback', () => {
      store.dispatch(toggleAction);
      expect(onStateChange.calledWith({isOpen: true})).to.equal(true);
    });

    it('should dispatch single action when toggled externally', () => {
      store.dispatch(toggleAction);
      expect(dispatchSpy.withArgs(toggleAction).calledOnce).to.equal(true);
    });
  });

  it('should allow multiple menus', () => {
    const store = makeStore({
      'main': { isOpen: true },
      'side': { isOpen: false }
    });
    const MainMenu = decorator(Menu, 'main');
    const SideMenu = decorator(Menu, 'side');
    const wrapper = mount(
      <Provider store={store}>
        <div>
          <MainMenu />
          <SideMenu />
        </div>
      </Provider>
    );
    const mainInner = wrapper.find(Menu).first();
    const sideInner = wrapper.find(Menu).last();
    expect(mainInner.props().isOpen).to.equal(true);
    expect(sideInner.props().isOpen).to.equal(false);
  });
});
