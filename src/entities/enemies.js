import { enemyEntity } from '../constants/entityTypes';

const enemy = {
  name: '',
  health: 1,
  damage: 1,
  xpOnDeath: 1,
  className: '',
  character: '',
  type: enemyEntity
};

export const DollarEnemy = {...enemy,
  name: 'Big Money',
  health: 5,
  damage: 1,
  className: 'enemy',
  character: '&dollar;'
};
