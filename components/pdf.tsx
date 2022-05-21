import styles from "../styles/Home.module.css";
import Image, { StaticImageData } from "next/image";

type PdfProps = {
  src: string;
  fallback?: StaticImageData;
  caption?: string;
  page?: number;
};

const Pdf = (props: PdfProps) => (
  <figure className={styles.figure}>
    <object
      data={`${props.src}#page=${props.page ?? 1}&toolbar=0&view=FitH`}
      type="application/pdf"
      height="100%"
      width="100%"
    >
      {props.fallback ? <Image alt="" src={props.fallback} /> : null}
    </object>
    <figcaption className={styles.figcaption}>
      <a href={props.src}>{props.caption ?? props.src}</a>
    </figcaption>
  </figure>
);

export { Pdf };
