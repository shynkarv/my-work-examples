
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Software Company</title>
        <meta name="description" content="Software Company Template" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Software Company
        </h1>
        <p className={styles.description}>
          We build software solutions to help your business grow.
        </p>
      </main>
    </div>
  )
}
