import { ATTACK } from '../constants/actionTypes';


export function attack(coordinates) {
  return  {
    type: ATTACK,
    payload: {
      coordinates
    }
  };
}
