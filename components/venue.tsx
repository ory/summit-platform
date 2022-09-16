import { DATE, TIME } from '@lib/constants';
import styleUtils from './utils.module.css';
import styles from './venue.module.css';

export default function Venue() {
  return (
    <div className={styles.wrapper}>
      <p>You can attend Ory Summit in person in Munich, Germany this year 🎉</p>
      <p>
        If you want to join <a href="https://forms.gle/mZS9ZxfqcAMvdPkv9">fill out this form</a> if
        you would like to attend the event in Munich.
      </p>
      <p>
        Ory Summit 2022 takes place in one of Europe's emerging tech hubs - Munich! Enjoy a vibrant
        city where innovation, technology and rich cultural life come together - right in the heart
        of Europe. The event is hosted at the Ory Germany Headquarters in the "House of
        Communication" in the eastern district of Haidhausen.
      </p>
      <p>
        Right next to the Ostbahnhof (Munich East) train station:
        <ul>
          <li>
            <a href="https://www.google.com/maps/place/August-Everding-Stra%C3%9Fe+25,+81671+M%C3%BCnchen/">
              Location on Google Maps
            </a>
          </li>
          <li>5-minute walk from Munich East train station</li>
          <li>8 minutes by underground tram/S-Bahn train from Munich Central Station </li>
          <li>approx. 30 minutes by S-Bahn (city commuter train) from Munich Airport </li>
          <li>2 minutes by car from the Mittlerer Ring ring road </li>
        </ul>
      </p>
      <div className={styles.info}>
        <ul>
          <li>House of Communication</li>
          <li>August-Everding-Straße 25</li>
          <li>81671 Munich Germany</li>
        </ul>
      </div>
      <div className={styles.imggrid}>
        <div>
          <img className={styles.contentimg} src="./summit2.png" alt="Ory Summit 2022" />
        </div>
        <div>
          <img
            className={styles.contentimg}
            src="./building.png"
            alt="House of Communication building"
          />
        </div>
        <div>
          <img className={styles.contentimg} src="./munich.png" alt="Munich by night" />
        </div>
        <div>
          {' '}
          <img
            className={styles.contentimg}
            src="./plan.png"
            alt="Map of Munich with an arrow to the House of Communication building"
          />
        </div>
      </div>

      <p>
        For all inquiries, please contact: <a href="mailto:office@ory.sh">office@ory.sh</a>
      </p>
    </div>
  );
}
