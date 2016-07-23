import { enemyEntity } from '../constants/entityTypes';

const Enemy = {
  name: '',
  health: 1,
  damage: 1,
  xpOnDeath: 1,
  className: 'enemy',
  character: '',
  type: enemyEntity,
  boss: false
};

export const DollarEnemy = {
  ...Enemy,
  name: 'Big Money',
  health: 5,
  damage: 1,
  character: '$'
};

export const BigBossEnemy = {
  ...Enemy,
  name: 'Big Boss',
  health: 5,
  damage: 20,
  character: 'B',
  boss: true
}
