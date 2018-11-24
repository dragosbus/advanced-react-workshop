import React from 'react';

export const User = props => {
  const { title, first, last } = props.name;
  return (
    <li>
      <img src={props.picture.medium} alt={props.login.username} />
      <p>
        {title} {first} {last}
      </p>
    </li>
  );
};
