import styles from "../styles/Home.module.css";

type QuestionsProps = {
  title: string;
  questions: [string[], string[]][];
};

const Questions = (props: QuestionsProps) => (
  <article className={styles.article}>
    <h1 className={styles.title}>{props.title}</h1>
    {props.questions?.map(([q, a], i) => (
      <ol key={i}>
        <li>
          <p style={{ fontWeight: "bold" }}>{q.join(" ")}</p>
          <p>{a.join(" ")}</p>
        </li>
      </ol>
    ))}
  </article>
);

export { Questions };
