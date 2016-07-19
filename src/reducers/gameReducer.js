import _ from 'lodash';

import initialState from './initialState';
import { ATTACK } from '../constants/actionTypes';

export default function game(state = initialState.game, action) {
  switch (action.type) {
    case ATTACK: {
      const playerAttackDamage = (state.player.damage * state.player.level)
      let enemy = {...state.board[action.payload.coordinates[0]][action.payload.coordinates[1]]};
      let newBoard = _.cloneDeep(state.board);
      
      const newEnemyHealth = enemy.health - playerAttackDamage;
      const enemyIsDead = newEnemyHealth <= 0;
      
      const newPlayerHealth = state.player.health - enemy.attack;
      const playerIsDead = newPlayerHealth <= 0;
      
      if (playerIsDead) {
        console.log("player died");
      } else if (enemyIsDead) {
        console.log("enemy is dead");
        enemy = {type: 'floor'};
      } else {
        // enemy is just damaged
        console.log("enemy was damaged: " + enemy.health);
        enemy.health -= playerAttackDamage;
      }
      
      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = enemy;
      return {
        ...state,
        board: newBoard 
      };
    }
    default:
      return state;
  }
}

