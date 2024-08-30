
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/CaseStudies.module.css';

export default function CaseStudies() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Case Studies</h1>
        <p>Explore our successful projects and the impact we've made on our clients' businesses.</p>
      </main>
      <Footer />
    </div>
  );
}
