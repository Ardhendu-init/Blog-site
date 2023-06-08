import React from "react";
import styles from "./page.module.css";
import Button from "@/src/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category: React.FC<{ params: any }> = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h2 className={styles.category}>{params.category}</h2>
      {data.map((item: any) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button title="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
              sizes=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
