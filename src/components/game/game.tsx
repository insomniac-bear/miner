import { FC, HTMLProps } from 'react';
import style from './game.module.css';

interface IGameProps extends HTMLProps<HTMLDivElement> {}

export const Game: FC<IGameProps> = ({ children }) => {
  return(
    <div className={style.container}>
      { children }
    </div>
  )
};