import { FC } from 'react';
import { CellValue } from '../cell-value/cell-value';
import { CellMask } from '../cell-mask/cell-mask';
import { useAppSelector as useSelector } from '../../services/hooks';
import { getMaskValues, getValues, getSize } from '../../services/board/board.selectors';
import { MaskValues } from '../../types';


export const Cell: FC<{ x: number; y: number}> = ({ x, y }) => {
  const cellValues = useSelector(getValues);
  const maskValues = useSelector(getMaskValues);
  const size = useSelector(getSize);

  return (
    <>
      {
        maskValues[y * size + x] !== MaskValues.transparent
        ? <CellMask x={x} y={y} value={maskValues[y * size + x]} />
        : <CellValue value={cellValues[y * size + x]} />
      }
    </>
  );
}