import { PayloadAction } from '@reduxjs/toolkit';
import { TGameStatus } from '../../../types';
import { IBoardState } from '../board.types';

export const changeGameStatusReducer = (state: IBoardState, action: PayloadAction<TGameStatus>) => {
  state.gameStatus = action.payload;
};
