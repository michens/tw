import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Introduction</title>
      </Head>

      <main>
        <article className={styles.article}>
          <h1 className={styles.title}>Introduction</h1>
          <p>
            This site is my attempt for exercise 7-1, which asks us to analyze
            the layout of three different pages.
          </p>
          <p>
            For each of the first two pages,{" "}
            <Link href="/doj">Department of Justice</Link> and{" "}
            <Link href="/cbo">Congressional Budget Office</Link>, I answer six
            questions asked by the book. For the final page,{" "}
            <Link href="/micron">Micron</Link>, I create a memo covering my
            analysis of the use of alignment.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Home;
