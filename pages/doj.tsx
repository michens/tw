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
      "This document uses a single column.",
      "Since it is a policy document that is densely packed with precise and technical information, it is already easy to get lost when reading a single line.",
      "The choice to use a single column further accentuates the issue.",
    ],
  ],
  [
    [
      "What type of justification has been used for the text?",
      "Was this a wise choice for this page size?",
      "Why or why not?",
    ],
    [
      "The text is full-justified, which removes visual markers and makes it easy to get lost.",
      "Using full-justification along with a single column significantly hampers reading ability.",
    ],
  ],
  [
    [
      "What alignment features, if any, have been used?",
      "What problems with the alignment, if any, do you see?",
    ],
    [],
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
          page={60}
          caption="U.S. Department of Justice"
        />
      </main>
    </div>
  );
};

export default Home;
