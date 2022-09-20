import styles from './consent.module.css';

export default function Consent() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.infotiny}>
        *by signing up you agree to the{' '}
        <a href="https://www.ory.sh/tos/">Ory Corp Terms of Service</a>.
      </p>
    </div>
  );
}
