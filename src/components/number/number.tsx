import { FC } from 'react';
import styles from './number.module.css';

enum Numbers {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
}

export const Number: FC<{ number: Numbers }> = ({ number }) => {
  return (
    <img
      className={styles.img}
      src={`./images/${Numbers[number]}.jpg`}
      width={13}
      height={23}
      alt={Numbers[number]}
    />
  );
}