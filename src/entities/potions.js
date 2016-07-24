import { potionEntity } from '../constants/entityTypes';

const Potion = {
  type: potionEntity,
  health: 10,
  className: 'potion',
  character: 'p',
  name: 'potion',
  frequency: 1
}

export const SmallPotion = {
  ...Potion,
  character: 'S',
  frequency: 2,
  name: 'Small Potion'
}

export const MediumPotion = {
  ...Potion,
  health: 15,
  character: 'M',
  name: 'Medium Potion'
}

export const LargePotion = {
  ...Potion,
  health: 20,
  character: 'L',
  name: 'Big Daddy Potion'
}

export const Potions = [SmallPotion, MediumPotion, LargePotion];
