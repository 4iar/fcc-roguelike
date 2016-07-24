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
  damage: 1,
  character: '$'
};

export const QuestionEnemy = {
  ...Enemy,
  name: 'Upside Down',
  health: 25,
  damage: 1,
  character: '¿'
};

export const BossEnemy = {
  ...Enemy,
  name: 'Big Boss',
  health: 200,
  damage: 120,
  frequency: 1,
  character: '💀',
  boss: true
}

export const Enemies = [QuestionEnemy, DollarEnemy];
