import { RootState } from "../store";

export const getValues = (state: RootState) => state.board.values;
export const getMaskValues = (state: RootState) => state.board.maskValues;
export const getSize = (state: RootState) => state.board.size;
export const getMineCount = (state: RootState) => state.board.mineCount;
export const getGameStatus = (state: RootState) => state.board.gameStatus;
export const getActionStatus = (state: RootState) => state.board.actionStatus;
