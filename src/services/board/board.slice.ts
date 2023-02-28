import type { IBoardState } from './board.types';
import { createSlice } from '@reduxjs/toolkit';
import { MaskValues } from '../../types';
import { MINE_COUNT, SIZE } from '../../settings';
import {
  changeActionStatusReducer,
  changeGameStatusReducer,
  changeMaskValueReducer,
  fillValuesReducer,
  looseGameReducer,
  resetGameReducer,
  setMaskTransparentReducer,
} from './reducers';

const initialState: IBoardState = {
  values: [],
  maskValues: new Array(SIZE * SIZE).fill(MaskValues.fill),
  size: SIZE,
  mineCount: MINE_COUNT,
  gameStatus: 'idle',
  actionStatus: 'none',
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setMaskTransparent: setMaskTransparentReducer,
    changeMaskValue: changeMaskValueReducer,
    fillValues: fillValuesReducer,
    changeGameStatus: changeGameStatusReducer,
    looseGame: looseGameReducer,
    resetGame: resetGameReducer,
    changeActionStatus: changeActionStatusReducer,
  },
});

export const {
  setMaskTransparent,
  changeActionStatus,
  changeMaskValue,
  changeGameStatus,
  fillValues,
  resetGame,
  looseGame,
} = boardSlice.actions;
export default boardSlice.reducer;
