import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const galleryContent = [
  {
    id: 1,
    name: "Illustrations",
    link: "/portfolio/illustrations",
  },
  {
    id: 2,
    name: "Websites",
    link: "/portfolio/websites",
  },
  {
    id: 3,
    name: "Application",
    link: "/portfolio/applications",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        {galleryContent.map((item) => (
          <Link key={item.id} href={item.link} className={styles.item}>
            <span className={styles.title}>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
