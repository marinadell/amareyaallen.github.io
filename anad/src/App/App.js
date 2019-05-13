import React from 'react';
import './App.css';
import Header from '../Header/Header';
import {HashRouter as Router, Route} from 'react-router-dom';
import Resume from '../Resume/Resume'
import Home from '../Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
    </div>
    </Router>
  );
}

export default App;
