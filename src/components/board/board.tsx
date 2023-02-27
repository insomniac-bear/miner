import { FC } from 'react';
import { Row } from '../rows/rows';
import { useAppSelector as useSelector } from '../../services/hooks';
import { getSize } from '../../services/board/board.selectors';
import styles from './board.module.css';

export const Board: FC = () => {
  const size = useSelector(getSize);
  const rows = [];

  for (let i = 0; i < size; i++) {
    rows.push(<Row rowNumber={i} />)
  }

  return (
    <div className={styles.container}>
      {
        [ ...rows ]
      }
    </div>
  );
};