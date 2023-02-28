import { PayloadAction } from '@reduxjs/toolkit';
import { MaskValues, CellValues } from '../../../types';
import { IBoardState, ICoords } from '../board.types';

export const changeMaskValueReducer = (state: IBoardState, action: PayloadAction<ICoords>) => {
  const { x, y } = action.payload;

  const idx = y * state.size + x;

  if (state.maskValues[idx] === MaskValues.transparent) {
    return;
  }

  state.maskValues[idx] = state.maskValues[idx] === 3 ? 1 : state.maskValues[idx] + 1;

  if (state.maskValues[idx] === MaskValues.flag && state.values[idx] === CellValues.mine) {
    state.mineCount = state.mineCount === 0 ? 0 : state.mineCount - 1;
  }

  if (state.maskValues[idx] === MaskValues.question && state.values[idx] === CellValues.mine) {
    state.mineCount = state.mineCount === 40 ? 40 : state.mineCount + 1;
  }

  if (state.mineCount === 0) {
    state.gameStatus = 'win';
    state.maskValues.forEach((_, i) => {
      if (state.maskValues[i] !== MaskValues.flag && state.maskValues[i] !== MaskValues.transparent) {
        state.maskValues[i] = MaskValues.transparent;
      }
    })
  }
};
