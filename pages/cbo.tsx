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
      "This document uses two columns",
      "By shortening the length of the lines, readers are better able to read through without losing their place.",
    ],
  ],
  [
    [
      "What type of justification has been used for the text?",
      "Was this a wise choice for this page size?",
      "Why or why not?",
    ],
    [
      "The text is left-justified, which leaves visual markers at the right edges of lines.",
      "Using left-justification along with two columns significantly increases ease of reading.",
    ],
  ],
  [
    [
      "What alignment features, if any, have been used?",
      "What problems with the alignment, if any, do you see?",
    ],
    [
      "Everything in this document is left-aligned.",
      "Adding additional padding on the sides of figures could help, but they already stand out by virtue of crossing the column gap.",
    ],
  ],
  [
    [
      "How many levels of heading appear on this page?",
      "Are the different levels designed effectively so that they are easy to distinguish?",
      "If not, what changes would you make to the design?",
    ],
    [
      "This page (20) has three levels of headings.",
      "Headings with italics denote subheading for headings with bold, which in turn denote subheadings for headings with large, bold letters on their own lines.",
      "The relationship between italic and bold headings is not obvious, and a numbering system would help clarify that.",
    ],
  ],
  [
    [
      "How are rules used on this page?",
      "Are they effective?",
      "Would you change any of them?",
    ],
    [
      "This page effectively uses rules to separate the figure and footnote from the main text.",
    ],
  ],
  [
    [
      "Describe the design of the body text on this page, focusing on columns and alignment.",
      "Is the design of the body text effective?",
      "Would you change it in any way?",
      "Why or why not?",
    ],
    [
      "The page is clean and easy to read.",
      "No page is perfect, and this could look even better with some small tweaks to make headings stand out more.",
    ],
  ],
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Congressional Budget Office</title>
      </Head>

      <main className={styles.main}>
        <Questions title="Congressional Budget Office" questions={questions} />
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
