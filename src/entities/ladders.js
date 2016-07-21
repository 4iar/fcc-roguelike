import { ladderEntity } from '../constants/entityTypes';

const ladder = {
  type: ladderEntity,
  className: 'ladder'
}

export const LadderUp = {
  ...ladder,
  direction: '+1',
  character: '↥',
  className: ladder.className + '-up'
}

export const LadderDown = {
  ...ladder,
  direction: '-1',
  character: '↧',
  className: ladder.className + '-down'
}
