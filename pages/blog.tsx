import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

const Blog: React.FC<BlogProps> = ({ dataBlog }) => (
  <Layout pageTitle="Blog Page">
    {dataBlog.map(({ id, title, body }) => (
      <div key={id} className={styles.card}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    ))}
  </Layout>
);

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog: Post[] = await res.json();

  return { props: { dataBlog } };
};

export default Blog;
