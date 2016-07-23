import _ from 'lodash';

import * as Potions from '../entities/potions';
import { Armours } from '../entities/armours';
import { Weapons } from '../entities/weapons';

import { LadderUp, LadderDown } from '../entities/ladders';
import areNeighboursFloor from './areNeighboursFloor';

function findRandomEmptyBoardLocation(board) {
  let found = false;
  while (!found) {
    const ladderCoordinates = [_.random(1, board.length), _.random(1, board[0].length)];

    if (areNeighboursFloor(board, ladderCoordinates)) {
      return ladderCoordinates;
    }
  }
}

function populateLadders(level, ladders) {
  let board = level.board;
  let spawnCoordinates = {};

  // TODO: factor these out
  if (ladders.up) {
    const ladderUpCoords = findRandomEmptyBoardLocation(board);
    board[ladderUpCoords[0]][ladderUpCoords[1]] = LadderUp;
    spawnCoordinates['up'] = [ladderUpCoords[0] + 1, ladderUpCoords[1]];
  }

  if (ladders.down) {
    const ladderDownCoords = findRandomEmptyBoardLocation(board);
    board[ladderDownCoords[0]][ladderDownCoords[1]] = LadderDown;
    spawnCoordinates['down'] = [ladderDownCoords[0] - 1, ladderDownCoords[1]];
  }

  return {
    ...level,
    board: board,
    spawnCoordinates: {
      ...level.spawnCoordinates,
      up: spawnCoordinates['up'],
      down: spawnCoordinates['down']
    }
  };
}

function populatePotions(board) {
  for (let p in Potions) {
    const Potion = Potions[p]
    _.times(Potion.frequency, () => {
      let coords = findRandomEmptyBoardLocation(board);
      board[coords[0]][coords[1]] = _.clone(Potion);
    });
  }
  return board;
}

function populateArmourAndWeapons(board) {
  [Armours, Weapons].forEach((Items) => {
    for (let i in Items) {
      const Item = Items[i];
      const roll = _.random(0, 100);

      if (roll <= Item.chance) {
        let coords = findRandomEmptyBoardLocation(board);
        board[coords[0]][coords[1]] = _.clone(Item);
      }
    }
  });

  return board;
}

export default function populateEntities(level, ladders={up: true, down: false}) {
  level = populateLadders(level, {up: true, down: true});
  let board = level.board;
  board = populatePotions(board);
  board = populateArmourAndWeapons(board);



  return {
    ...level,
    board
  };
}
