import initialState from './initialState';
import { TEST_ACTION } from '../constants/actionTypes';

export default function gameReducer(state = initialState.game, action) {
  console.log(TEST_ACTION);
  switch (action.type) {
    default:
      return state;
  }
}

