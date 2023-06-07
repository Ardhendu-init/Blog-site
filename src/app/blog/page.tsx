import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/id" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam sit deleniti praesentium quae, vel error impedit, atque est
            cupiditate alias! Corporis deserunt inventore aperiam quasi eveniet
            accusamus aliquam pariatur?
          </p>
        </div>
      </Link>
      <Link href="/blog/id" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam sit deleniti praesentium quae, vel error impedit, atque est
            cupiditate alias! Corporis deserunt inventore aperiam quasi eveniet
            accusamus aliquam pariatur?
          </p>
        </div>
      </Link>
      <Link href="/blog/id" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam sit deleniti praesentium quae, vel error impedit, atque est
            cupiditate alias! Corporis deserunt inventore aperiam quasi eveniet
            accusamus aliquam pariatur?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
