import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { I_User } from '../types/types';
import List from '../components/List';
import UserItem from '../components/UserItem';

const UsersPage: FC = () => {
  const [users, set_users] = useState<I_User[]>([]);

  useEffect(() => {
    getAll__Users();
  }, []);

  async function getAll__Users() {
    try {
      const response = await axios.get<I_User[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      set_users(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: I_User) => <UserItem user={user} key={user.id} />}
    />
  );
};

export default UsersPage;
