'use strict';

import types from '../constants';

export const initialState = [
    {
        text: 'use Redux',
        completed: false,
        id: 0,
    }
];

export default function todos(
    state = initialState,
    action
) {
    switch (action.type) {
        default:
          return state;
    }
}
