import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useAppSelector as useSelector, useAppDispatch as useDispatch } from '../../services/hooks';
import { getGameStatus } from '../../services/board/board.selectors';
import { Number } from '../number/number';
import styles from './timer.module.css';
import { changeGameStatus } from '../../services/board/board.slice';

export const Timer: FC = () => {
  const [timer, setTimer] = useState<number>(40 * 60);
  const dispatch = useDispatch();
  const gameStatus = useSelector(getGameStatus);

  let timerID: ReturnType<typeof setInterval>;

  const getTime = () => {
    timerID = setInterval(() => setTimer(timer => timer - 1), 1000);
  };


  useEffect(() => {
    if (gameStatus === 'process') {
      getTime();
    }

    if (gameStatus === 'idle') {
      setTimer(40 * 60);
    }

    if (timer === 0) {
      dispatch(changeGameStatus('loose'));

      if (timerID) {
        clearInterval(timerID);
      }
    }

    return () => clearInterval(timerID);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ gameStatus ]);

  const getMinutes = (time: number) => {
    const minutes = Math.floor(time / 60);
    const dozens = Math.floor(minutes / 10);
    const units = Math.floor(minutes % 10);
    return {dozens, units};
  }

  const getSeconds = (time: number) => {
    const seconds = Math.floor(time % 60);
    const dozens = Math.floor(seconds / 10);
    const units = Math.floor(seconds % 10);
    return {dozens, units};
  }

  const minutes = getMinutes(timer);
  const seconds = getSeconds(timer);

  return (
    <div className={styles.container}>
      { <Number number={minutes.dozens} /> }
      { <Number number={minutes.units} /> }
      { <Number number={seconds.dozens} /> }
      { <Number number={seconds.units} /> }
    </div>
  );
}