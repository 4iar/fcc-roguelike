import { weaponEntity } from '../constants/entityTypes';

const Weapon = {
  type: weaponEntity,
  name: 'Weapon',
  damage: 1,
  character: 'w',
  chance: 50,
  className: 'weapon'
};

export const WoodenPokerWeapon = {
  ...Weapon,
  name: 'Wooden Poker',
  damage: 2,
  character: 'wp'
}

export const AnalDirgeWeapon = {
  ...Weapon,
  name: 'Anal Dirge',
  damage: 5,
  character: 'ad'
}
