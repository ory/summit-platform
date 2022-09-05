import { DATE, TIME } from '@lib/constants';
import styleUtils from './utils.module.css';
import styles from './venue.module.css';

export default function Venue() {
  return (
    <div className={styles.wrapper}>
      <p>
        There are two options to attend the Ory Summit 2022:
        <ul>
          <li>
            {' '}
            You can watch the sessions live online at the{' '}
            <a href="./stage/main">summit.ory.sh Main Stage</a>
          </li>
          <li> You attend the event live in the Ory Headquarters in Munich, Germany.</li>
        </ul>
        Due to limited space in the venue, please send us an{' '}
        <a href="mailto:office@ory.sh?subject=I want to attend Ory Summit 2022 in-person">email</a>{' '}
        or <a href="https://forms.gle/mZS9ZxfqcAMvdPkv9">fill out this form</a> if you would like to
        attend the event live in Munich.
      </p>
      <p>Ory Summit 2022 takes place in one of Europe's emerging tech hubs - Munich!</p>
      <p>
        Enjoy a vibrant city where innovation, technology and rich cultural life come together -
        right in the heart of Europe.
      </p>
      <p>The event is hosted at the Ory Headquarters in the eastern district of Haidhausen. </p>

      <h3 className={styles.info}>Address</h3>
      <div className={styles.info}>
        <p>August-Everding-Straße 25 / </p>
        <p>81671 / Munich / Germany</p>
      </div>
      <p>
        For all general inquiries, please contact: <a href="mailto:office@ory.sh">office@ory.sh</a>
      </p>
    </div>
  );
}
