import React from 'react';
import {render} from 'react-dom';
import {useMachine} from '@xstate/react';
import {MachineContext, useMachineValue, toggleMachine} from './machine';

function Child({...props}) {
  const [current] = useMachineValue();

  console.log('current', current);

  return <div />;
}

function App() {
  const [current, send] = useMachine(toggleMachine);
  const machine = [current, send];

  return (
    <MachineContext.Provider value={machine}>
      <button onClick={_evt => send('TOGGLE')}>{current.value}</button>
      <Child />
    </MachineContext.Provider>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
