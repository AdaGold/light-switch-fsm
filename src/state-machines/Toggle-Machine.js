import { createMachine, interpret } from 'xstate';

const toggle = createMachine({
  id: 'toggler',
  initial: 'off',
  states: {
    off: {
      on: {
        toggle: 'on',
        break: 'broken',
      },
    },
    on: {
      on: {
        toggle: 'off',
        break: 'broken'
      },
    },
    broken: {
      on: {},
    },
  },
});

const service = interpret(toggle);

export { toggle, service };