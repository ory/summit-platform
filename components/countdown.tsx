import { useEffect, useState } from 'react';
import styles from './countdown.module.css';
import { DATE, TIME } from '@lib/constants';

type Countdown = {
  seconds: number;
  days: number;
  minutes: number;
  hours: number;
};

function Countdown({ seconds, days, minutes, hours }: Countdown) {
  const calculateTimeLeft = () => {
    const difference = +new Date('2022-10-20T10:00:00') - +new Date();
    let timeLeft = {};

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
    <div>
      <br />
      <p className={styles.infotiny}>
        Starts at: {DATE} / {TIME}
      </p>
      <div className={styles.infosmall}>
        {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          <p>
            <span>{timeLeft.days}</span>
            <span> Days - </span>
            <span>{timeLeft.hours}</span>
            <span> Hours - </span>
            <span>{timeLeft.minutes}</span>
            <span> Minutes - </span>
            <span>{timeLeft.seconds}</span>
            <span> Seconds left until Ory Summit!</span>
          </p>
        ) : (
          <p>Ory Summit is live 🥳, go watch the sessions!</p>
        )}
      </div>
    </div>
  );
}

export default Countdown;
