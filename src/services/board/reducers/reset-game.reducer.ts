import { SIZE, MINE_COUNT } from '../../../settings';
import { MaskValues } from '../../../types';
import { IBoardState } from '../board.types';

export const resetGameReducer = (state: IBoardState) => {
  state.gameStatus = 'idle';
  state.maskValues = new Array(SIZE * SIZE).fill(MaskValues.fill);
  state.mineCount = MINE_COUNT;
  state.values = [];
};
