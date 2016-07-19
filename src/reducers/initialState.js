import {DollarEnemy} from '../entities/enemies';  // just for testing
import {Player} from '../entities/player';  // just for testing
import {Floor} from '../entities/floor';
import {wallTypes} from '../entities/obstacles';

export default {
  game: {
    board: [
      [Floor,DollarEnemy,Floor],
      [wallTypes[0],Player,wallTypes[0]],
      [Floor,Floor,Floor]
    ],
    player: {
      coordinates: [1,1],
      xp: 0,
      level: 1,
      health: 10,
      damage: 5,
      criticalChance: 0.3,
      items: {}
    }
  }
};
