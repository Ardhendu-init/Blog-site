import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

interface buttonInterface {
  url: string;
  title: string;
}

const Button: React.FC<buttonInterface> = ({ url, title }) => {
  return (
    <Link href={url}>
      <button className={styles.btn}>{title}</button>
    </Link>
  );
};

export default Button;
