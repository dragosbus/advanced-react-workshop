import React from 'react';

export const RadioButton = props => {
  let className = props.isActive ? 'active' : '';
  return(
    <button className={className} onClick={props.onSelect}>
      {props.children}
    </button>
  );
};