import type { FC, MouseEvent } from 'react';
import type { ICellMaskProps } from './cell-mask.props';
import cn from 'classnames';
import { useAppDispatch as useDispatch } from '../../services/hooks';
import { MaskValues } from '../../types';
import { setMaskTransparent, changeMaskValue } from '../../services/board/board.slice';
import styles from './cell-mask.module.css';

export const CellMask: FC<ICellMaskProps> = ({ x, y, value }) => {
  const dispatch = useDispatch();

  const onMaskClick = () => {
    dispatch(setMaskTransparent({ x, y }));
  }

  const onContextClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(changeMaskValue({ x, y }));
  }

  const styleMask = cn(styles.cell, styles[MaskValues[value]]);
  return (
    <button
      className={styleMask}
      onClick={onMaskClick}
      onContextMenu={(e) => onContextClick(e)}
    />
  )
};
