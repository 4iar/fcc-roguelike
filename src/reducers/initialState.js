import generateLevels from '../utils/generateLevels';

import { WoodenPokerWeapon } from '../entities/weapons';
import { LeafArmour } from '../entities/armours';

let levels = generateLevels();
export default {
  game: {
    board: levels[0].board,
    levels,
    levelNumber: 0,
    bossKilled: false,
    player: {
      coordinates: levels[0].spawnCoordinates.player,
      xp: 0,
      level: 1,
      health: 25,
      damage: 5,
      criticalChance: 0.3,
      items: {},
      weapon: WoodenPokerWeapon,
      armour: LeafArmour,
    }
  }
};
