import styles from "../styles/Home.module.css";

type PdfProps = {
  src: string;
  caption?: string;
  page?: number;
};

const Pdf = (props: PdfProps) => (
  <figure className={styles.figure}>
    <embed
      src={`${props.src}#page=${props.page ?? 1}&toolbar=0&view=FitH`}
      type="application/pdf"
      height="100%"
      width="100%"
    />
    <figcaption className={styles.figcaption}>
      <a href={props.src}>{props.caption ?? props.src}</a>
    </figcaption>
  </figure>
);

export { Pdf };
