import { PayloadAction } from '@reduxjs/toolkit';
import { TActionStatus } from '../../../types';
import { IBoardState } from '../board.types';

export const changeActionStatusReducer = (state: IBoardState, action: PayloadAction<TActionStatus>) => {
  state.actionStatus = action.payload;
}