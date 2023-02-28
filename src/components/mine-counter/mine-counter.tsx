import { FC } from 'react';
import { useAppSelector as useSelector } from '../../services/hooks';
import { getMineCount } from '../../services/board/board.selectors';
import { Number } from '../number/number';
import styles from './mine-counter.module.css';

export const MineCounter: FC = () => {
  const mineCount = useSelector(getMineCount);

  const hundreds = Math.floor(mineCount / 100);
  const dozens = Math.floor(mineCount % 100 / 10);
  const units = Math.floor((mineCount % 100) % 10);

  return (
    <div className={styles.container}>
      <Number number={hundreds} />
      <Number number={dozens} />
      <Number number={units} />
    </div>
  );
}