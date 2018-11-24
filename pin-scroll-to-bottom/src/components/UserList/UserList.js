import React from 'react';
import { User } from './User';
import './UserList.css';

export const UserList = props => {
  return (
    <ul className="users">
      {props.users.map(user => (
        <User key={user.email} {...user} />
      ))}
    </ul>
  );
};
