import { MaskValues, CellValues } from '../../../types';
import { IBoardState } from '../board.types';

export const looseGameReducer = (state: IBoardState) => {
  state.maskValues.forEach((_, i) => {
    if (state.maskValues[i] === MaskValues.flag && state.values[i] !== CellValues.mine) {
      state.values[i] = CellValues.mistake;
    }
    state.maskValues[i] = MaskValues.transparent;
  });
};
