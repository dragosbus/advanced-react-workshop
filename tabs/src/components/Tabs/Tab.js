import React from 'react';

export const Tab = props => (
  <button
    onClick={props.changeActivePanel}
    disabled={props.disabled}
    className={props.disabled ? 'tab-disabled' : props.isActive ? 'tab-active' : ''}
  >
    {props.children}
  </button>
);
