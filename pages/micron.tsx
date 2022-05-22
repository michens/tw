import type { NextPage } from "next";
import Head from "next/head";
import { Pdf } from "../components/pdf";
import styles from "../styles/Home.module.css";
import micron from "../public/micron.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Micron</title>
      </Head>

      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>Micron</h1>
          <div className={styles.memoHead}>
            <span>To:</span>
            <span>Karrin Peterson</span>
            <span>From:</span>
            <span>Michael Hensler</span>
            <span>Subject:</span>
            <span>Analysis of Alignment in Micron User Guide</span>
            <span>Date:</span>
            <span>21 May 2022</span>
          </div>
          <p>
            The purpose of this memo is to discuss the use of alignment in
            &quot;CSN-33: Micron BGA Manufacturer&apos;s User Guide&quot;.
          </p>
          <h2>Analysis</h2>
          <p>
            In CSN-33, Micron have aligned headings and figure captions at the
            left. They have aligned body paragraphs with an indentation from the
            left edge that covers excludes roughly 25% of the page. This large
            indentation reduces line length, which eases reading and creates
            clear delineations between headings, figures, and body text.
          </p>
          <p>
            However, some negative aspects appear:
            <ul>
              <li>
                <em>Bulleted lists</em> - These have the same alignment as the
                main body, which leads to visual clutter for sections
                incorporating them
              </li>
              <li>
                <em>Unbalanced feel</em> - The vast majority of text is in the
                right half of the page, while the majority of the whitespace is
                in the left. This stands out as unusual in a bad way
              </li>
            </ul>
          </p>
          <h2>Recommendation</h2>
          <p>
            Add a small indentation to bulleted lists to help them visually
            stand out from the surrounding text.
          </p>
          <p>
            To balance the page while maintaining readability of the lines,
            divide the left margin space equally between the left and right. The
            page has more than enough separation in styles between headings and
            body text to ensure that a reduced left margin will not induce
            confusion.
          </p>
        </article>
        <Pdf
          src="https://media-www.micron.com/-/media/client/global/documents/products/customer-service-note/csn33_bga_user_guide.pdf?rev=c99754802d0547e59ccb6fd83f734991"
          caption="Micron Technology, Inc."
          fallback={micron}
        />
      </main>
    </div>
  );
};

export default Home;
