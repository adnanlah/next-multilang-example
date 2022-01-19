import '@picocss/pico'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
