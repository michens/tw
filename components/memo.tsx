import styles from "../styles/Home.module.css";

type MemoProps = {
  title: string;
  questions: [string[], string[]][];
};

const Memo = (props: MemoProps) => (
  <article className={styles.article}>
    <h1 className={styles.title}>{props.title}</h1>
    <ol>
      {props.questions?.map(([q, a], i) => (
        <li key={i}>
          <p style={{ fontWeight: "bold" }}>{q.join(" ")}</p>
          <p>{a.join(" ")}</p>
        </li>
      ))}
    </ol>
  </article>
);

export { Memo };
