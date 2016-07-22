import { ATTACK, MOVE, CHANGELEVEL, PICKUPWEAPON, PICKUPARMOUR } from '../constants/actionTypes';
import { weaponEntity, armourEntity } from '../constants/entityTypes';


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
  itemTypeMap[armourEntity] = PICKUPARMOUR;
  return {
    type: itemTypeMap[item.type],
    payload: {
      item
    }
  };
}
