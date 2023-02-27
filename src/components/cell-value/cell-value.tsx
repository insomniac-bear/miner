import { FC } from 'react';
import cn from 'classnames'
import styles from './cell-value.module.css';
import { CellValues } from '../../types';

export const CellValue: FC<{value: number}> = ({ value }) => {
    const cellClassNames = cn(styles.cell, styles[CellValues[value]]);

  return(
    <div className={cellClassNames}></div>
  );
};
