import { PayloadAction } from '@reduxjs/toolkit';
import type { IBoardState, ICoords } from '../board.types';
import { CellValues, MaskValues } from '../../../types';

export const setMaskTransparentReducer = (state: IBoardState, action: PayloadAction<ICoords>) => {
  const { x, y } = action.payload;

  const clearing: [number, number][] = [];

  const clear = (x: number, y: number) => {
    const availableX = x >= 0 && x < state.size;
    const availableY = y >= 0 && y < state.size;

    const idx = y * state.size + x;

    if (availableX && availableY) {
      if (state.maskValues[idx] === MaskValues.transparent) {
        return;
      }
      clearing.push([x, y]);
    }
  };

  clear(x, y);

  while (clearing.length) {
    const [x, y] = clearing.pop()!!;

    const idx = y * state.size + x;

    if (state.maskValues[idx] === MaskValues.fill) {
      state.maskValues[idx] = MaskValues.transparent;
    }

    if (state.values[idx] !== 0) {
      continue;
    }

    clear(x + 1, y);
    clear(x - 1, y);
    clear(x, y + 1);
    clear(x, y - 1);
  }

  if (state.values[y * state.size + x] === CellValues.mine) {
    state.gameStatus = 'loose';

    state.maskValues.forEach((_, i) => {
      if (state.maskValues[i] === MaskValues.flag && state.values[i] !== CellValues.mine) {
        state.values[i] = CellValues.mistake;
      }
      state.maskValues[i] = MaskValues.transparent;
    });

    state.values[y * state.size + x] = CellValues.failed;
  }
};
