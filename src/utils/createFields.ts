import { CellValues } from "../types";

export const createFields = (size: number, mineCount: number, clickX: number, clickY: number): CellValues[] => {
  const field: CellValues[] = new Array(size * size).fill(CellValues.empty);

  const inc = (x: number, y: number) => {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      if (field[y * size + x] !== CellValues.mine) {
        field[y * size + x] += 1;
      }
    }
  };

  let i = 0;
  while (i <= mineCount) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);

    if (field[y * size + x] !== CellValues.mine && x !== clickX && y !== clickY) {
      field[y * size + x] = CellValues.mine;

      inc(x + 1, y);
      inc(x - 1, y);
      inc(x, y + 1);
      inc(x, y - 1);
      inc(x - 1, y - 1);
      inc(x + 1, y - 1);
      inc(x - 1, y + 1);
      inc(x + 1, y + 1);
    }

    i += 1;
  }

  return field;
}