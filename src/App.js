// @flow

import React from 'react';
import './App.css';
import Die from './Die';

const App = () => (
  <div>
    <div className="header">
      <h1>
Zoid Dice Roller
      </h1>
    </div>
    <div className="dice-container">
      <Die />
    </div>
  </div>
);

export default App;
