import { FC, useEffect } from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch as useDispatch, useAppSelector as useSelector } from '../../services/hooks';
import styles from './button.module.css';
import { getActionStatus, getGameStatus } from '../../services/board/board.selectors';
import { resetGame } from '../../services/board/board.slice';

export const Button: FC = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(getGameStatus);
  const actionStatus = useSelector(getActionStatus);

  const [buttonClass, setButtonClass] = useState(cn(styles.btn));

 useEffect(() => {
    if (actionStatus === 'none' && gameStatus === 'loose') {
      setButtonClass(cn(styles.btn, styles.loose))
    }

    if (actionStatus === 'panic') {
      setButtonClass(cn(styles.btn, styles.panic));
    }

    if (actionStatus === 'none' && gameStatus === 'process') {
      setButtonClass(cn(styles.btn));
    }

    if (actionStatus === 'none' && gameStatus === 'win') {
      setButtonClass(cn(styles.btn, styles.win));
    }
  }, [gameStatus, actionStatus]);

  const onButtonPress = () => {
    setButtonClass(cn(styles.btn, styles.pressed));
  }

  const onButtonUp = () => {
    setButtonClass(cn(styles.btn));
  }

  const onButtonClick = () => {
    if (gameStatus && gameStatus !== 'idle') {
      dispatch(resetGame());
    }
  }

  return(
    <button
      onMouseDown={onButtonPress}
      onMouseUp={onButtonUp}
      onClick={onButtonClick}
      className={buttonClass}
      type='button'
    />
  );
};