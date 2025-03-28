import { NextPage } from "next";
import React, { useMemo } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const loremParagraphs = useMemo(
    () =>
      Array.from({ length: 30 }, () =>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias. Amet ea neque autem mollitia facere inventore rerum deserunt, laborum enim esse vel beatae vitae, iusto eaque sit a sunt."
      ),
    []
  );

  return (
    <Layout pageTitle="Home Page">
      <Image src="/heloo.jpg" width={200} height={200} alt="Illustration of a greeting" />
      <p className={styles.titleHomepage}>Heloo</p>
      <div className={styles.textContainer}>
        {loremParagraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
