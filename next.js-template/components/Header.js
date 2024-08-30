
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Software Company</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/case-studies">Case Studies</Link>
      </nav>
    </header>
  );
}
