import { DATE, TIME } from '@lib/constants';
import styleUtils from './utils.module.css';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.wrapper}>
      <p>
        Ory Summit is a global, hybrid conference around open source based end-to-end security and
        zero trust solutions for the Ory Community - customers, developers, maintainers,
        contributors, and partners.
      </p>
      <p>
        Topics are focused on but not limited to first party data privacy and protection, cloud
        authentication and authorization, compliance with global regulations such as GDPR,
        distributed access control, risk management and security best practices.
      </p>
      <h2 className={styles.infosmall}>{DATE}</h2>
      <p className={styles.info}>Starts at {TIME}</p>
      <h2>The themes</h2>
      <ul>
        <li>
          <strong>Ory Cloud -</strong>How to improve any application with best in class security
          from Ory
        </li>
        <li>
          <strong>Ecosystem & Integration -</strong> how to use Ory with third-party solutions and
          migrate IDs
        </li>
        <li>
          <strong>Community Talks -</strong> Learn from the Ory Team and experienced users
        </li>
        <li>
          <strong>Teams & Workflow -</strong> how Ory is making software teams more productive
        </li>
        <li>
          <strong>Concept Talks -</strong> authorization & authentication, open source, cloud
          architecture, compliance, security, data analytics, and much more.
        </li>
      </ul>
      <h2>How can I attend</h2>
      <p>
        There are two options to attend Ory Summit 2022:
        <ul>
          <li>
            {' '}
            Watch the sessions live online at <a href="./stage/main">summit.ory.sh.</a>
          </li>
          <li>Attend the event live in the Ory Headquarters in Munich, Germany.</li>
        </ul>
        <a href="https://share-eu1.hsforms.com/1JJOxdq5jQ9qSwS2ZrCAYfQextgn">Fill out this form</a>{' '}
        if you would like to attend the event live in Munich.
      </p>
      <h2>Why Ory Summit</h2>
      <ul>
        <li>Learn about Ory Cloud security best practices</li>
        <li>Listen to tech pioneers and industry leaders</li>
        <li>Level up your skills by engaging in tech talks delivered by proven experts.</li>
        <li>Expand your network</li>
        <li>Learn from code examples and answers from the experts</li>
      </ul>
      <p>
        For all general inquiries, please contact: <a href="mailto:office@ory.sh">office@ory.sh</a>
      </p>
    </div>
  );
}
