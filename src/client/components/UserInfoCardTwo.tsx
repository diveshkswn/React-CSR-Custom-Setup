import React, { useEffect, useState } from 'react';
import styles from '../styles/UserInfoCard.module.css';

function UserInfoCard():JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<{name : string; id : number}[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      return response.json();
    };
    fetchUsers().then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.UserInfoContainer}>
      <h1>Users</h1>
      {isLoading && (<h4>Fetching Data...</h4>)}
      {!isLoading && users.map((eachUser) => (<h4 key={eachUser.id}>{eachUser.name}</h4>))}
    </div>
  );
}

export default UserInfoCard;
