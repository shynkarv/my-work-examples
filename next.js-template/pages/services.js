
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles['services-title']}>Our Services</h1>
        <ul>
          <li>Custom Software Development</li>
          <li>Mobile App Development</li>
          <li>Web Application Development</li>
          <li>Cloud Solutions</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
