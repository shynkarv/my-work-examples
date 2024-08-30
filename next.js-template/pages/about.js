
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>About Us</h1>
        <p>We are a leading software company providing top-notch solutions to businesses worldwide.</p>
      </main>
      <Footer />
    </div>
  );
}
