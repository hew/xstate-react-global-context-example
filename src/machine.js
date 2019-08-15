import {createContext, useContext} from 'react';
import {Machine} from 'xstate';

export const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: {TOGGLE: 'active'}
    },
    active: {
      on: {TOGGLE: 'inactive'}
    }
  }
});

export const MachineContext = createContext();
export const useMachineValue = () => useContext(MachineContext);
