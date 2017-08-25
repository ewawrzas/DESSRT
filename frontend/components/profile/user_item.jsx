import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => (
  <li className="userItem">
    <Link to={`/users/${user.id}`}>
      <span>{user.username}</span>
    </Link>
  </li>
);

export default UserItem;
