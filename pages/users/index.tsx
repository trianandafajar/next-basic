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

  const handleUserClick = useCallback(
    (userId: number) => {
      router.push(`/users/${userId}`);
    },
    [router]
  );

  return (
    <Layout pageTitle="Users Page">
      <div className={styles.userContainer}>
        {dataUsers.map(({ id, name, email }) => (
          <div
            key={id}
            className={styles.card}
            onClick={() => handleUserClick(id)}
          >
            <p>{name}</p>
            <p>{email}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers: User[] = await response.json();

  return {
    props: { dataUsers },
  };
};

export default Users;
