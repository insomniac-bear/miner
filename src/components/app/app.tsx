import { FC } from 'react';
import styles from './app.module.css';
import { Board } from '../board/board';
import { Game } from '../game/game';
import { Header } from '../header/header';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Game>
        <Header />
        <Board />
      </Game>
    </div>
  );
}
