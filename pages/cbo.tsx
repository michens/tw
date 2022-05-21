import type { NextPage } from "next";
import Head from "next/head";
import { Pdf } from "../components/pdf";
import { Questions } from "../components/questions";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CBO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Questions title="CBO" questions={[]} />
        <Pdf
          src="https://www.cbo.gov/sites/default/files/113th-congress-2013-2014/reports/43907-BudgetOutlook.pdf"
          page={23}
          caption="U.S Congressional Budget Office"
        />
      </main>
    </div>
  );
};

export default Home;
