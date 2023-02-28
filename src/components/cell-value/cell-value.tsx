import type { FC, MouseEvent } from 'react';
import cn from 'classnames'
import { CellValues } from '../../types';
import styles from './cell-value.module.css';

export const CellValue: FC<{value: number}> = ({ value }) => {
    const cellClassNames = cn(styles.cell, styles[CellValues[value]]);

  const onContextClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  return(
    <div
      onContextMenu={(e) => onContextClick(e)}
      className={cellClassNames}
    />
  );
};
