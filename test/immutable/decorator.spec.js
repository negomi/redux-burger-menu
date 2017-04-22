import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import reducer from '../../src/immutable/reducer.js';
import decorator from '../../src/immutable/decorator.js';

describe('immutable decorator', () => {
  const Menu = () => <div />;
  const ReduxBurgerMenu = decorator(Menu);
  const mockStore = configureStore()

  it('should return a function', () => {
    expect(ReduxBurgerMenu).to.be.a('function');
  });

  it('should render from immutable store without error', () => {
    const store = mockStore(fromJS({burgerMenu: {isOpen: false}}));
    expect(() => {
      shallow(
        <Provider store={store}>
          <ReduxBurgerMenu />
        </Provider>
      );
    }).not.to.throw();
  });

  it('should render from non-immutable store without error', () => {
    const store = mockStore({burgerMenu: fromJS({isOpen: false})});
    expect(() => {
      shallow(
        <Provider store={store}>
          <ReduxBurgerMenu />
        </Provider>
      );
    }).not.to.throw();
  });

  describe('inner component', () => {
    const store = mockStore({burgerMenu: fromJS({isOpen: false})});
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

  it('should allow multiple menus', () => {
    const store = mockStore({
      burgerMenu: fromJS({
        'main': {isOpen: true},
        'side': {isOpen: false}
      })
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
