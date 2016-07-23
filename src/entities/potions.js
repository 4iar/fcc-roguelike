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
