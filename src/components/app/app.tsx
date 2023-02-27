import { FC } from 'react';
import styles from './app.module.css';
import { Board } from '../board/board';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Board />
    </div>
  );
}
