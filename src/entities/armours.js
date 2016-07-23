import { armourEntity } from '../constants/entityTypes';

const Armour = {
  type: armourEntity,
  name: 'armour',
  defence: 1,
  character: 'a',
  chance: 50,
  className: 'armour'
}

export const LeafArmour = {
  ...Armour,
  name: 'Leafy Breastplate',
  defence: 1,
  character: 'aL'
}

export const LeatherArmour = {
  ...Armour,
  name: 'Leather Catsuit',
  defence: 5,
  character: 'cs'
}
export const Armours = [LeatherArmour, ShinyArmour, DiamondArmour];
