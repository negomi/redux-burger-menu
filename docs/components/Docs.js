import React from 'react';
import s from '../style.css';
import burger from '../burger.svg';

const Docs = function Docs() {
  return (
    <div>
      <header>
        <a href="https://github.com/negomi/redux-burger-menu" className={s.burger} dangerouslySetInnerHTML={{ __html: burger }} />
        <h2>A Redux reducer and higher-order component decorator for use with <a href="https://github.com/negomi/react-burger-menu">react-burger-menu</a></h2>
      </header>
      <main>
      </main>
    </div>
  );
};

export default Docs;
