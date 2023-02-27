import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CellValues, MaskValues } from '../../types';
import { createFields } from '../../utils/createFields';

const MINE_COUNT = 40;
const SIZE = 16;

interface IBoardState {
  values: CellValues[];
  maskValues: MaskValues[];
  size: number;
  mineCount: number;
}

interface ICoords {
  x: number;
  y: number;
}

const initialState: IBoardState = {
  values: createFields(SIZE, MINE_COUNT),
  maskValues: new Array(SIZE * SIZE).fill(MaskValues.fill),
  size: SIZE,
  mineCount: MINE_COUNT,
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setMaskTransparent: (state, action: PayloadAction<ICoords>) => {
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
        state.maskValues.forEach((_, i) => {
          if (state.maskValues[i] === MaskValues.flag && state.values[i] !== CellValues.mine) {
            state.values[i] = CellValues.mistake;
          }
          state.maskValues[i] = MaskValues.transparent;
        });
        state.values[y * state.size + x] = CellValues.failed;
      }
    },
    changeMaskValue: (state, action: PayloadAction<ICoords>) => {
      const { x, y } = action.payload;

      const idx = y * state.size + x;

      if (state.maskValues[idx] === MaskValues.transparent) {
        return;
      }

      state.maskValues[idx] = state.maskValues[idx] === 3 ? 1 : state.maskValues[idx] + 1;
    }
  },
});

export const { setMaskTransparent, changeMaskValue } = boardSlice.actions;
export default boardSlice.reducer;
