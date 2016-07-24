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
  character: 'w'
};

export const HattoriHanzoWeapon = {
  ...Weapon,
  name: 'Hattori Hanzo Sword',
  damage: 20,
  chance: 35,
  character: 'w'
};

export const AnalDirgeWeapon = {
  ...Weapon,
  name: 'Anal Dirge',
  damage: 70,
  chance: 2,
  character: 'W'
};

export const Weapons = [HattoriHanzoWeapon, AnalDirgeWeapon];
