import type { NextPage } from "next";
import Head from "next/head";
import { Pdf } from "../components/pdf";
import { Questions } from "../components/questions";
import styles from "../styles/Home.module.css";

const questions: [string[], string[]][] = [
  [
    [
      "How many columns are used in this document?",
      "How does the column design affect the readability of the page?",
    ],
    [
      "This document uses a single column. It is a policy document that is densely packed with precise and technical information.",
      "It is easy to get lost when reading a single line, and the choice to use a single column accentuates the issue.",
    ],
  ],
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>US DOJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Questions title="DOJ" questions={questions} />
        <Pdf
          src="https://www.justice.gov/sites/default/files/uspc/legacy/2010/08/27/uspc-manual111507.pdf"
          page={59}
          caption="U.S. Department of Justice"
        />
      </main>
    </div>
  );
};

export default Home;
