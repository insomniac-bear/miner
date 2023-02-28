import { FC } from 'react';
import styles from './header.module.css';
import { MineCounter } from '../mine-counter/mine-counter';
import { Timer } from '../timer/timer';
import { Button } from '../button/button';

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <MineCounter />
      <Button />
      <Timer />
    </div>
  )
}