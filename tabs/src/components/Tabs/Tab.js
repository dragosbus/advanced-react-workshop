import React from 'react';

export const Tab = props => (
  <button onClick={props.changeActivePanel} disabled={props.disabled}>
    {props.children}
  </button>
);
