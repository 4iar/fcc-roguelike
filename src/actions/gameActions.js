import { ATTACK, MOVE, CHANGELEVEL, PICKUPWEAPON } from '../constants/actionTypes';
import { weaponEntity } from '../constants/entityTypes';


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

export function pickUpItem(item) {
  let itemTypeMap = { }
  itemTypeMap[weaponEntity] = PICKUPWEAPON;
  return {
    type: itemTypeMap[item.type],
    payload: {
      item
    }
  };
}
