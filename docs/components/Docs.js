import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight as syntaxStyle } from 'react-syntax-highlighter/dist/styles';
import s from '../style.css';
import burger from '../burger.svg';

const Docs = function() {
  const installCode = `
  npm install redux-burger-menu react-burger-menu --save
  `;

  const reducerCode = `
  import {createStore, combineReducers} from 'redux';
  import {reducer as burgerMenu} from 'redux-burger-menu';

  const reducers = {
    // Your other reducers go here
    burgerMenu // Must be mounted at 'burgerMenu'
  };

  const reducer = combineReducers(reducers);
  const store = createStore(reducer);
  `;

  const decoratorCode = `
  // Menu.js

  import {slide as Menu} from 'react-burger-menu';
  import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

  export default reduxBurgerMenu(Menu);
  `;

  const multipleDecoratorCode = `
  // PrimaryMenu.js

  import {slide as Menu} from 'react-burger-menu';
  import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

  export default reduxBurgerMenu(Menu, 'primary');

  // SecondaryMenu.js

  import {stack as Menu} from 'react-burger-menu';
  import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

  export default reduxBurgerMenu(Menu, 'secondary');
  `;

  const immutableCode = `
  import {reducer as burgerMenu} from 'redux-burger-menu/immutable';
  import {slide as Menu} from 'react-burger-menu/immutable';
  import {decorator as reduxBurgerMenu} from 'redux-burger-menu/immutable';
  import {action as toggleMenu} from 'redux-burger-menu/immutable';
  `;

  const storeCode = `
  burgerMenu: {
    isOpen: false
  }
  `;

  const multipleStoreCode = `
  burgerMenu: {
    primary: {
      isOpen: true
    },
    secondary: {
      isOpen: false
    }
  }
  `;

  const dispatchCode = `
  import {action as toggleMenu} from 'redux-burger-menu';

  const isOpen = true
  store.dispatch(toggleMenu(isOpen));
  `;

  const multipleDispatchCode = `
  import {action as toggleMenu} from 'redux-burger-menu';

  store.dispatch(toggleMenu(true, 'primary'));
  `;

  return (
    <div>
      <header>
        <a href="https://github.com/negomi/redux-burger-menu" className={s.burger} dangerouslySetInnerHTML={{ __html: burger }} />
        <h2>A Redux reducer and higher-order component decorator for use with <a href="https://github.com/negomi/react-burger-menu">react-burger-menu</a></h2>
      </header>
      <main>
        <p>redux-burger-menu provides everything you need to integrate react-burger-menu with Redux.</p>
        <p>It consists of:</p>
        <ul>
          <li>a reducer to keep your Redux store in sync with the menu state</li>
          <li>a higher-order component which decorates your menu component and dispatches actions when the state changes</li>
        </ul>
        <h3>Getting started</h3>
        <SyntaxHighlighter language="bash" style={syntaxStyle}>{installCode}</SyntaxHighlighter>
        <p>Include the reducer:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{reducerCode}</SyntaxHighlighter>
        <p>Decorate your menu component:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{decoratorCode}</SyntaxHighlighter>
        <p>The component you export from the above file can then be used just like react-burger-menu.</p>
        <h3>Controlling the menu state</h3>
        <p>When installed as above, the menu can be opened and closed in all the default ways (i.e. using the built in icon and cross buttons, plus clicking on the overlay or pressing the ESC key).</p>
        <p>The burgerMenu part of your store will look like this:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{storeCode}</SyntaxHighlighter>
        <p>If you want to trigger a menu state change from elsewhere in your app, you can do this using the redux-burger-menu action creator, passing the desired open state as a boolean:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{dispatchCode}</SyntaxHighlighter>
        <h3>Multiple menus</h3>
        <p>You can store the state of multiple instances of react-burger-menu. To do this, you need to pass a unique string identifier as the second argument when you decorate each of your menu components:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{multipleDecoratorCode}</SyntaxHighlighter>
        <p>Then to open or close a menu, you need to pass its ID as the second argument when you call the <code>toggleMenu</code> action creator:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{multipleDispatchCode}</SyntaxHighlighter>
        <p>When using multiple menus, the burgerMenu part of your store will contain all your menus, keyed by their IDs, like this:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{multipleStoreCode}</SyntaxHighlighter>
        <h3>Using Immutable.js?</h3>
        <p>Just import everything from <code>redux-burger-menu/immutable</code> instead:</p>
        <SyntaxHighlighter language="javascript" style={syntaxStyle}>{immutableCode}</SyntaxHighlighter>
      </main>
    </div>
  );
};

export default Docs;
