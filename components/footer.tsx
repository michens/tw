import styles from "../styles/Home.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  ["/", "Home"],
  ["/doj", "Department of Justice"],
  ["/cbo", "Congressional Budget Office"],
  ["/micron", "Micron"],
];

const Footer = () => {
  const { route } = useRouter();

  return (
    <footer className={styles.footer}>
      {links.map(([path, name]) => (
        <Link href={path} key={path}>
          {path === route ? <a aria-selected>{name}</a> : <a>{name}</a>}
        </Link>
      ))}
    </footer>
  );
};

export { Footer };
