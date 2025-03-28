import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersProps {
  dataUsers: User[];
}

const Users: React.FC<UsersProps> = ({ dataUsers }) => {
  const router = useRouter();

  const handleClick = useCallback(
    (id: number) => {
      router.push(`/users/${id}`);
    },
    [router]
  );

  return (
    <Layout pageTitle="Users Page">
      <div className={styles.userContainer}>
        {dataUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => handleClick(user.id)}
            className={styles.card}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers: User[] = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}

export default Users;
