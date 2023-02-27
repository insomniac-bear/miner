import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './board/board.slice';

export const store = configureStore({
  reducer: {
    board: boardSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
