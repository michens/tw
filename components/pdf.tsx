import styles from "../styles/Home.module.css";
import Image, { StaticImageData } from "next/image";
import { useCallback, useState } from "react";

type PdfProps = {
  src: string;
  fallback?: StaticImageData;
  caption?: string;
  page?: number;
};

const Pdf = (props: PdfProps) => {
  const [isPdf, setIsPdf] = useState(true);
  const useFallback = useCallback(() => setIsPdf(false), []);

  return (
    <figure
      className={isPdf ? styles.figure : `${styles.figure} ${styles.fallback}`}
    >
      <object
        data={`${props.src}#page=${props.page ?? 1}&toolbar=0&view=FitH`}
        type="application/pdf"
        height={isPdf ? "100%" : "auto"}
      >
        {props.fallback ? (
          <Image alt="" src={props.fallback} onLoad={useFallback} />
        ) : null}
      </object>
      <figcaption className={styles.figcaption}>
        <a href={props.src}>{props.caption ?? props.src}</a>
      </figcaption>
    </figure>
  );
};

export { Pdf };
