// @flow

import React, { Component } from 'react';

type Props = {
  sides: string,
  numberOfDice: string,
  handleDiceRoll?: Function,
};
type State = {
  rolledValue: string,
  rolledDice: Array<number>,
};

class Die extends Component<Props, State> {
  state = {
    rolledValue: '',
    rolledDice: [],
  };

  rollDice = (sides: string, numberToRoll: string) => {
    const results = [];
    for (let i = 0; i < Number(numberToRoll); i++) {
      results.push(Math.floor(Math.random() * Number(sides)) + 1);
    }
    const value = results.reduce((a, b) => a + b, 0).toString();
    this.setState({ rolledDice: results, rolledValue: value });
  };

  render() {
    const { sides, numberOfDice } = this.props;
    this.rollDice(sides, numberOfDice);
    return (
      <div>
        <h3>
          Roll:
          {this.state.rolledValue}
        </h3>
        <div className="diceValues">
          {this.state.rolledDice}
        </div>
      </div>
    );
  }
}

export default Die;
