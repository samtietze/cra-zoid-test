// @flow

import React, { Component } from 'react';
import './App.css';
import Die from './Die';

type Props = {
  sides: string,
  numberOfDice: string,
};
const App = (props: Props) => {
  handleDiceClick = (event) => {};
  return (
    <div>
      <div className="header">
        <h1>
Zoid Dice Roller
        </h1>
      </div>
      <div className="dice-container">
        <Die rollDice={rollDice} />
      </div>
    </div>
  );
};

export default App;
