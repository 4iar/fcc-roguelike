import { ATTACK, MOVE, CHANGELEVEL, PICKUPWEAPON, PICKUPARMOUR, PICKUPPOTION, RESET } from '../constants/actionTypes';
import { weaponEntity, armourEntity, potionEntity } from '../constants/entityTypes';


export function attack(coordinates, multipliers) {
  return  {
    type: ATTACK,
    payload: {
      coordinates,
      multipliers,
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

export function pickUpItem(item, coordinates) {
  let itemTypeMap = {};
  itemTypeMap[weaponEntity] = PICKUPWEAPON;
  itemTypeMap[armourEntity] = PICKUPARMOUR;
  itemTypeMap[potionEntity] = PICKUPPOTION;
  return {
    type: itemTypeMap[item.type],
    payload: {
      item,
      coordinates
    }
  };
}

export function reset(levels) {
  return {
    type: RESET,
    payload: {
      levels,
    }
  };
}

