import initialState from './initialState';
import { TEST_ACTION } from '../constants/actionTypes';

export default function game(state = initialState.game, action) {
  switch (action.type) {
    default:
      return state;
  }
}

