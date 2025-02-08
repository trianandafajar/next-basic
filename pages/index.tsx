import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const loremParagraphs = new Array(30).fill(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias. Amet ea neque autem mollitia facere inventore rerum deserunt, laborum enim esse vel beatae vitae, iusto eaque sit a sunt."
);

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/heloo.jpg" width={200} height={200} alt="Greeting illustration" />
      <p className={styles["title-homepage"]}>Heloo</p>
      <div className="text-container">
        {loremParagraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
