import { RootState } from "../store";

export const selectValues = (state: RootState) => state.board.values;
export const selectMaskValues = (state: RootState) => state.board.maskValues;
export const getSize = (state: RootState) => state.board.size;
export const getMineCount = (state: RootState) => state.board.mineCount;
