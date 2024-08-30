
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Software Company. All rights reserved.</p>
    </footer>
  );
}
