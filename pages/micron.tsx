import type { NextPage } from "next";
import Head from "next/head";
import { Pdf } from "../components/pdf";
import { Questions } from "../components/questions";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Micron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Questions title="Micron" questions={[]} />
        <Pdf
          src="https://media-www.micron.com/-/media/client/global/documents/products/customer-service-note/csn33_bga_user_guide.pdf?rev=c99754802d0547e59ccb6fd83f734991"
          caption="Micron Technology, Inc."
        />
      </main>
    </div>
  );
};

export default Home;
