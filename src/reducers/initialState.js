import {DollarEnemy} from '../entities/enemies';  // just for testing
import {Player} from '../entities/player';  // just for testing
import {Floor} from '../entities/floor';
import {wallTypes} from '../entities/obstacles';

export default {
  game: {
    board: [
      [Player,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor],
      [Floor,DollarEnemy,Floor,Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor, Floor]
    ],
    player: {
      coordinates: [0,0],
      xp: 0,
      level: 1,
      health: 10,
      damage: 5,
      criticalChance: 0.3,
      items: {}
    }
  }
};
