import { PayloadAction } from '@reduxjs/toolkit';
import { SIZE, MINE_COUNT } from '../../../settings';
import { createFields } from '../../../utils/createFields';
import { IBoardState, ICoords } from '../board.types';

export const fillValuesReducer = (state: IBoardState, action: PayloadAction<ICoords>) => {
  const { x, y } = action.payload;
  state.values = createFields(SIZE, MINE_COUNT, x, y);
};
