import { enemyEntity } from '../constants/entityTypes';

const Enemy = {
  name: '',
  health: 1,
  damage: 1,
  xpOnDeath: 20,
  className: 'enemy',
  character: '',
  type: enemyEntity,
  frequency: 5,
  boss: false
};

export const DollarEnemy = {
  ...Enemy,
  name: 'Big Money',
  health: 15,
  damage: 3,
  frequency: 10,
  character: '$'
};

export const QuestionEnemy = {
  ...Enemy,
  name: 'Upside Down',
  health: 25,
  damage: 5,
  character: '¿'
};

export const BossEnemy = {
  ...Enemy,
  name: 'Big Boss',
  health: 50,
  damage: 10,
  frequency: 1,
  character: '💀',
  boss: true
}

export const Enemies = [QuestionEnemy, DollarEnemy];
