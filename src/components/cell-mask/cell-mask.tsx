import type { FC, MouseEvent } from 'react';
import type { ICellMaskProps } from './cell-mask.props';
import cn from 'classnames';
import { useAppDispatch as useDispatch, useAppSelector as useSelector } from '../../services/hooks';
import { MaskValues } from '../../types';
import {
  setMaskTransparent,
  changeMaskValue,
  changeGameStatus,
  fillValues,
  changeActionStatus,
} from '../../services/board/board.slice';
import {
  getGameStatus,
  getSize,
  selectMaskValues,
} from '../../services/board/board.selectors';
import styles from './cell-mask.module.css';

export const CellMask: FC<ICellMaskProps> = ({ x, y, value }) => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(getGameStatus);
  const maskValues = useSelector(selectMaskValues);
  const size = useSelector(getSize);

  const onMaskClick = () => {
    if (gameStatus === 'idle') {
      dispatch(changeGameStatus('process'));
      dispatch(fillValues({ x, y }));
    }
    dispatch(setMaskTransparent({ x, y }));
  }

  const onMaskMouseDown = (e: MouseEvent) => {
    if (e.button === 0) {
      dispatch(changeActionStatus('panic'));
    }
  }

  const onMaskMouseUp = (e: MouseEvent) => {
    if (e.button === 0) {
      dispatch(changeActionStatus('none'));
    }
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
      onMouseDown={onMaskMouseDown}
      onMouseUp={onMaskMouseUp}
      onClick={onMaskClick}
      onContextMenu={(e) => onContextClick(e)}
      disabled={maskValues[y * size + x] !== 1}
    />
  )
};
