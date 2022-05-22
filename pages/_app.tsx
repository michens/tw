import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import type { AppProps } from "next/app";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.app}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default App;
