import React from 'react';

export const Tab = props => (
  <button onClick={props.changeActivePanel}>
    {props.children}
  </button>
);