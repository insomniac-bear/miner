import { CellValues, MaskValues, TActionStatus, TGameStatus } from '../../types';

export interface IBoardState {
  values: CellValues[];
  maskValues: MaskValues[];
  size: number;
  mineCount: number;
  gameStatus: TGameStatus;
  actionStatus: TActionStatus;
}

export interface ICoords {
  x: number;
  y: number;
}
