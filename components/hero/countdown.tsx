import { useEffect, useState } from 'react';
import styles from './countdown.module.css';
import { SHORT_DATE } from '@lib/constants';

type Countdown = {
  seconds?: number;
  days?: number;
  minutes?: number;
  hours?: number;
};

function Countdown({ seconds, days, minutes, hours }: Countdown) {
  const calculateTimeLeft = () => {
    const difference = +new Date('2022-10-20T10:00:00') - +new Date();
    let timeLeft: Countdown = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.countdown}>
        {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          <p>
            <span>{timeLeft.days}</span>
            <span>d - </span>
            <span>{timeLeft.hours}</span>
            <span>h - </span>
            <span>{timeLeft.minutes}</span>
            <span>m - </span>
            <span>{timeLeft.seconds}</span>
            <span>s</span>
          </p>
        ) : (
          <p>Ory Summit is live 🥳, go watch the sessions!</p>
        )}
      </div>
    </div>
  );
}

export default Countdown;
