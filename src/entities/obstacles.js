import { obstacleEntity } from '../constants/entityTypes';

const wall = {
  name: 'wall',
  displayCharacter: '&block',
  className: '',
  type: obstacleEntity
};

export const wallTypes = [
  {...wall, className: 'wall1'},
  {...wall, className: 'wall2'},
  {...wall, className: 'wall3'},
];
