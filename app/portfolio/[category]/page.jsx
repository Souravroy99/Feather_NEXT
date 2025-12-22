import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import BackButton from "@/components/Button/BackButton/BackButton.jsx";

const Category = async(props) => {
  
  const params = await props.params
  const { category } = params  

  const data = items[category]

  if(!data) notFound();

  return (
    <div className={styles.container}>
      <div className="flex gap-2">
        <h1 className={styles.catTitle}>{category}</h1>
          <BackButton />
      </div>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
