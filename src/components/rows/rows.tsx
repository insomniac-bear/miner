import { FC } from 'react';
import { useAppSelector as useSelector } from '../../services/hooks';
import { getSize } from '../../services/board/board.selectors';
import { Cell } from '../cell/cell';
import styles from './row.module.css';

export const Row: FC<{ rowNumber: number }> = ({ rowNumber }) => {
  const cells = [];
  const size = useSelector(getSize);

  for (let i = 0 ; i < size; i++) {
    cells.push(<li><Cell x={i} y={rowNumber} /></li>);
  }

  return(
    <ul className={styles.container}>
      {
        [ ...cells ]
      }
    </ul>
  );
}