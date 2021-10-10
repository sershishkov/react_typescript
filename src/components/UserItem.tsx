import React, { FC } from 'react';
import { I_User } from '../types/types';

interface I_UserItemProps {
  user: I_User;
}

const UserItem: FC<I_UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: '1px solid grey' }}>
      {user.id} {user.name}
      Проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  );
};

export default UserItem;
