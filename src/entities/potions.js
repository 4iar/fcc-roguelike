import { potionEntity } from '../constants/entityTypes';

const Potion = {
  type: potionEntity,
  health: 10,
  className: 'potion',
  character: 'p',
  name: 'potion'
}

export const SmallPotion = {
  ...Potion,
  name: 'Small Potion'
}
