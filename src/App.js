import React from 'react';
import './App.css';

const App = (props) => {
  console.log(props);
  const testProps = window.xprops;
  console.log(window.xprops);
  const d6field = document.querySelector('#d6-number');
  console.log(d6field);
  const rollButtons = document.querySelector('button');

  const handleDiceRoll = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  for (let i = 0; i < rollButtons.length; i++) {
    const button = rollButtons[i];
    button.addEventListener('click', () => {
      handleDiceRoll();
    });
  }

  return (
    <div>
      props:
      <h1>
        <pre>
          <code>
            {JSON.stringify(props, null, 4)}
          </code>
        </pre>
      </h1>
      <h1>
        xprops:
      </h1>
      <h1>
        <pre>
          <code>
            {JSON.stringify(testProps, null, 4)}
          </code>
        </pre>
      </h1>
    </div>
  );
};

export default App;
