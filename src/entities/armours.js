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
  character: 'b'
}

export const LeatherArmour = {
  ...Armour,
  name: 'Leather Catsuit',
  chance: 50,
  defence: 3,
  character: 'a'
}

export const ShinyArmour = {
  ...Armour,
  name: 'Shiny Pantaloons',
  chance: 25,
  defence: 5,
  character: 'A'
}

export const DiamondArmour = {
  ...Armour,
  name: 'Diamond Heart',
  chance: 20,
  defence: 7,
  character: 'A'
}

export const Armours = [LeatherArmour, ShinyArmour, DiamondArmour];
