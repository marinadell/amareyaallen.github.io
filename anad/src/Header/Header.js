import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

function Header() {
  return (
      <header className="App-header">
        <h1>AMAREYA ALLEN-DABNEY</h1>
        <p>a.allendabney@gmail.com</p> 
        <a href="https://github.com/marinadell" className="link-tags">Amareya's Github</a>
        <p>(651)-338-6794</p>
      </header>
  );
}

export default Header;