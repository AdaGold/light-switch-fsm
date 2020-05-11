import React, { useState, useEffect } from 'react';
import LightBulb from './components/LightBulb'
import { interpret } from 'xstate';
import { toggle, service } from './state-machines/Toggle-Machine';
import './App.css';

function App () {
  const [bulbOn, setBulbOn] = useState(false);
  useEffect(() => {
    service.onTransition(state => {
      console.log('Transitioning', state);
      switch (state.value) {
        case 'on': setBulbOn(true);
          break;
        case 'off': setBulbOn(false);
          break;
        case 'broken': setBulbOn(false);
          break;
        default:
      }
    });
    service.start();
  });


  const restartMachine = (event) => {
    service = interpret(toggle);

    setBulbOn(false);
    console.log('restarting');
  }

  console.log(bulbOn);
  return (
    <div className="App">
      <LightBulb checked={bulbOn} />
      <section>
        <button onClick={() => service.send('toggle')} >Turn {bulbOn ? 'Off' : 'On'}</button>
        <button onClick={() => service.send('break')} >Break Bulb</button>
      </section>
    </div>
  );
}

export default App;
