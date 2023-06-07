import React from "react";
import styles from "./page.module.css";
import Button from "@/src/components/button/Button";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Creative Portfolio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
  },
  {
    id: 2,
    title: "Minimal Single Product",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
  },
  {
    id: 3,
    title: "Strong Together Charity",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
  },
];

const Category: React.FC<{ params: any }> = ({ params }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.category}>{params.category}</h2>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button title="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
