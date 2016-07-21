import { ATTACK, MOVE, CHANGELEVEL } from '../constants/actionTypes';


export function attack(coordinates) {
  return  {
    type: ATTACK,
    payload: {
      coordinates
    }
  };
}

export function move(coordinates) {
  return {
    type: MOVE,
    payload: {
      coordinates
    }
  };
}

export function changeLevel(direction) {
  return {
    type: CHANGELEVEL,
    payload: {
      direction
    }
  };
}
