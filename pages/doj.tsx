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
    [
      "The alignment feels random.",
      "The document has sections indented for no discernible reason adjacent to sections that need indentation for clarity, but have none.",
      "The document has tables with clear columns and tables with random spacing between columns.",
    ],
  ],
  [
    [
      "How many levels of heading appear on this page?",
      "Are the different levels designed effectively so that they are easy to distinguish?",
      "If not, what changes would you make to the design?",
    ],
    [
      "This page (59) has two levels of headings.",
      "The only way to distinguish the headings is to know that lettered headings have numbered subheadings.",
      "The different levels of headings should have different styles and indentation would also be appropriate, especially since the sections are so short.",
    ],
  ],
  [
    [
      "How are rules used on this page?",
      "Are they effective?",
      "Would you change any of them?",
    ],
    [
      "The page uses a single rule to separate something that looks like a footnote, but it is actually part of a footer that appears on every page.",
      "Having an irrelevant footnote on every page will distract and confuse readers, but the rule itself accomplishes its role.",
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
      "While having multiple columns could help the design, the inconsistent and illogical use (or lack) of alignment makes the document feel unprofessional.",
      "A reader needs to be able to immediately understand the hierarchy and relationships between sections and tables.",
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
